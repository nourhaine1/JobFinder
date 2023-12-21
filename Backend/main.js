const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/JobFinder')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB'));

// Define routes using controller functions
const user_routers = require('./routers/userRouter');
app.use('/api',user_routers );

// Start server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
