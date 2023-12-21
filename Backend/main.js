const express = require('express');
const mongoose = require('mongoose');
const UserController = require('./Controllers/UserController');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/JobFinder')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB'));

// Define routes using controller functions
app.post('/user', UserController.createUser);
app.get('/Users', UserController.getAllUsers);
app.get('/Users/:id', UserController.getUserById);
app.put('/Users/:id', UserController.updateUser);
app.delete('/Users/:id', UserController.deleteUser);

// Start server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
