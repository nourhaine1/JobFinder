const express = require('express')
const router = express.Router()



const  { 
    getCompanys,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany 
} = require('../controllers/CompanyController.js')

router.get('/',getCompanys)
router.get('/getCompany/:CompanyID',getCompany)
router.post('/',createCompany)
router.put('/:CompanyID',updateCompany)
router.delete('/deleteCompany/:CompanyID', deleteCompany)


module.exports= router