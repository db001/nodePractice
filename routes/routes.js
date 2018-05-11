const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/users', userController.users);

router.get('/user/:username', userController.user);

router.post('/user/:username/newPost',
  userController.addEntry
);

router.delete('/user/:username/deleteEntry/:id',
  userController.deleteEntry
);

router.get('/login', userController.login);

router.get('/registerForm', userController.registerForm);

router.post('/register',
  userController.validateRegister,
  userController.register,
  authController.login
);

router.post('/login', authCOntroller.login);

module.exports = router;