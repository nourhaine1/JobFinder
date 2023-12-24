const express = require('express')
const router = express.Router()



const  { 
    getApplications,
    createApplication,
    deleteApplication 
} = require('../controllers/ApplicationController.js')

router.get('/',getApplications)
router.post('/',createApplication)
router.delete('/deleteApplication/:ApplicationID', deleteApplication)


module.exports= router