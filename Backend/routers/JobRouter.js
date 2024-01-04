const express = require('express')
const router = express.Router()



const  { 
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    getJobsByUserId
} = require('../controllers/JobController.js')

router.get('/',getJobs)
router.get('/getJob/:JobID',getJob)
router.get('/jobByUser/:UserId',getJobsByUserId)
router.post('/',createJob)
router.put('/:JobID',updateJob)
router.delete('/deleteJob/:JobID', deleteJob)


module.exports= router