const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/users',  userController.users);

module.exports = router;