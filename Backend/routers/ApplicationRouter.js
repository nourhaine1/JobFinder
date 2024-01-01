const express = require('express')
const router = express.Router()



const  { 
    getApplications,
    createApplication,
    deleteApplication,
    doesApplicationExist
} = require('../controllers/ApplicationController.js')

router.get('/',getApplications)
router.post('/',createApplication)
router.delete('/deleteApplication/:ApplicationID', deleteApplication)
router.get('/doesApplicationExist/:UserID/:JobID',doesApplicationExist)

module.exports= router