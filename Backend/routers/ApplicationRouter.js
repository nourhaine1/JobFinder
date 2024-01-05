const express = require('express')
const router = express.Router()



const  { 
    getApplications,
    createApplication,
    deleteApplication,
    doesApplicationExist,
    getApplicationsByJobId,
    getApplicationsByUserId
} = require('../controllers/ApplicationController.js')

router.get('/',getApplications)
router.post('/',createApplication)
router.delete('/deleteApplication/:ApplicationID', deleteApplication)
router.get('/doesApplicationExist/:UserID/:JobID',doesApplicationExist)
router.get('/applicationsByJob/:JobId',getApplicationsByJobId)
router.get('/applicationsByUser/:UserId',getApplicationsByUserId)
module.exports= router