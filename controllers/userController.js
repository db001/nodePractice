const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.users = async  (req, res) => {
    const users = await User.find();
    res.render('users', { title: "Users", users });
};

exports.user = async (req, res) => {
    const user = await User.findOne({ name: req.params.username });
    res.render('user', { title: `${user.name}`, user });
}