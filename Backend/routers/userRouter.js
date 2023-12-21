const express = require('express')

const UserController = require('../Controllers/UserController');
const router = express.Router();

router.post('/user', UserController.createUser);
router.get('/Users', UserController.getAllUsers);
router.get('/Users/:id', UserController.getUserById);
router.put('/Users/:id', UserController.updateUser);
router.delete('/Users/:id', UserController.deleteUser);
module.exports= router
