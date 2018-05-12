const mongoose = require('mongoose');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');

// exports.users = async (req, res) => {
//     const users = await User.find();
//     res.render('users', { title: "Users", users });
// };

// exports.user = async (req, res) => {
//     const user = await User.findOne({ name: req.params.username });
//     res.render('user', { title: `${user.name}`, user });
// };

// exports.addEntry = async (req, res) => {
//     if (req.body.description == "") {
//         return;
//     }
//     const user = await User.findOneAndUpdate(
//         // Find user that matches username
//         { name: req.params.username },
//         // Update entries
//         { $push:
//                 { "entries":
//                         { date: Date.now(), text: req.body.description }
//                 }
//         }, { new: true }
//     );
//     res.redirect(`/user/${req.params.username}`);
// };

// exports.deleteEntry = async (req, res) => {
//     console.log(req.params);
//     const user = await User.findOneAndUpdate(
//         { name: req.params.username },
//         { $pull:
//                 { "entries":
//                         { _id: req.params.id }
//                 }
//         }, { new: true }
//     );
//     res.redirect(`/user/${req.params.username}`);
// };

exports.login = (req, res) => {
    res.render('login', { title: "Log in" });
};

exports.registerForm = (req, res) => {
    res.render('register', { title: 'Register' });
};

exports.validateRegister = (req, res, next) => {
    // console.log(req.body);
    req.sanitizeBody('username');
    req.checkBody('username', 'You must enter a username').notEmpty();
    req.checkBody('email', 'That email is not valid').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password cannot be blank').notEmpty();
    req.checkBody('confirmPassword', 'Confirm password cannot be blank').notEmpty();
    req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
        req.flash('error', errors.map(err => err.msg));
        res.render('register', { title: 'Register', body: req.body, flashes: req.flash() });
        return;
    }
    console.log('Validated user');
    next();
};

exports.register = async (req, res, next) => {
    console.log('Registering user');
    const user = new User({
        username: req.body.username,
        email: req.body.email
    });
    console.log(user);
    // Promisify throwing error "register is not a function" using callback instead
    // const registerWithPromise = promisify(User.register, User);
    // await registerWithPromise(user, req.body.password);
    User.register(user, req.body.password, (error, user) => {
        if (error) {
            console.log(error);
            return;
        }
        next();
    })
};

