const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.users = async  (req, res) => {
    const users = await User.find();
    res.render('users', { title: "Users", users });
};