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

router.post('/user/:username/newPost',
  userController.addEntry
);

router.delete('/user/:username/deleteEntry/:id',
  userController.deleteEntry
);

router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/register', userController.validateRegister)
module.exports = router;