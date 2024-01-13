const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const upload = multer({ storage, fileFilter });

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