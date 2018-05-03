const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.users = async (req, res) => {
    const users = await User.find();
    res.render('users', { title: "Users", users });
};

exports.user = async (req, res) => {
    const user = await User.findOne({ name: req.params.username });
    res.render('user', { title: `${user.name}`, user });
};

exports.addEntry = async (req, res, next) => {
    console.log('Add entry');
    if(req.body.description == "") {
        return;
    }
    const user = await User.findOneAndUpdate(
        // Find user that matches username
        { name: req.params.username },
        // Update entries
        {
            $push:
                {
                    "entries":
                        {
                            date: Date.now(),
                            text: req.body.description
                        }
                }
        },
        { new: true }
    );
    next();
};

exports.deleteEntry = async (req, res, next) => {
    console.log(req.params.id);
    const user = await User.findOneAndUpdate(
        { name: req.params.username },
        {
            $pull: 
                {
                    "entries":
                        {
                            _id: req.params.id
                        }
                }
        }
    );
    next();   
}