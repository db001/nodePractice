const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const diaryController = require('../controllers/diaryController');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/users',  userController.users);
router.get('/diary', diaryController.diary);

module.exports = router;