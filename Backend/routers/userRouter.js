const express = require('express')

const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/getUser/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/deleteUser/:id', UserController.deleteUser);
module.exports= router
