const express = require('express');
const router = express.Router();

const {
    getRecruiter,
    getRecruiter,
    createRecruiter,
    updateRecruiter,
    deleteRecruiter

} = require('../controllers/RecruiterController.js');


router.get('/', getRecruiter)
router.get('/getRecruiter/:RecruiterID', getRecruiter)
router.post('/', createRecruiter)
router.put('/:RecruiterID', updateRecruiter);
router.delete('/deleteRecruiter/:recruiterID', deleteRecruiter);

module.exports = router;