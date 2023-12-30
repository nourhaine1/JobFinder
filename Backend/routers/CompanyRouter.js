const express = require('express')
const router = express.Router()
const multer=require('multer');
const fs = require('fs');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/uploads')); // Destination folder for storing uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Renaming the file to avoid conflicts
    },
  });
  
  const upload = multer({ storage: storage });

const  { 
    getCompanys,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany 
} = require('../controllers/CompanyController.js')

router.get('/',getCompanys)
router.get('/getCompany/:CompanyID',getCompany)
router.post('/',upload.single('logo'),createCompany)
router.put('/:CompanyID',updateCompany)
router.delete('/deleteCompany/:CompanyID', deleteCompany)


module.exports= router