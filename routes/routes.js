const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/users',  userController.users);

router.get('/user/:username', userController.user);

module.exports = router;