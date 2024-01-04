const express = require('express')
const router = express.Router()



const  { 
    getApplications,
    createApplication,
    deleteApplication,
    doesApplicationExist,
    getApplicationsByJobId
} = require('../controllers/ApplicationController.js')

router.get('/',getApplications)
router.post('/',createApplication)
router.delete('/deleteApplication/:ApplicationID', deleteApplication)
router.get('/doesApplicationExist/:UserID/:JobID',doesApplicationExist)
router.get('/applicationsByJob/:JobId',getApplicationsByJobId)
module.exports= router