const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


router.post('/user', UserController.createUser);


router.get('/users', UserController.getAllUsers);


router.get('/user/:userId', UserController.getUserById);


router.put('/user/:userId', UserController.updateUser);


router.delete('/user/:userId', UserController.deleteUser);

module.exports = router;
