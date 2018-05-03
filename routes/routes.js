const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/users', userController.users);

router.get('/user/:username', userController.user);

router.post('/user/:username',
  userController.addEntry,
  userController.user
);

router.delete('/user/:username/:id',
  userController.deleteEntry,
  userController.user
);

module.exports = router;