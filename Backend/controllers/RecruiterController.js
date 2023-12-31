const Recruiter = require('../models/RecruiterModel.js');

const getRecruiters = (req, res) => {
    Recruiter.find({})
        .then(result => res.json({ result }))
        .catch(() => res.json({ msg: 'Recruiter not found' }));
};

const getRecruiter = (req, res) => {
    Recruiter.findOne({ _id: req.params.recruiterID })
        .then(result => {
            if (!result) {
                return res.json({ msg: 'Recruiter not found' });
            }
            res.json({ result });
        })
        .catch(error => res.json({ msg: 'Error finding Recruiter', error }));
};

const deleteRecruiter = (req, res) => {
    Recruiter.findOneAndDelete({ _id: req.params.recruiterID })
        .then(result => {
            if (!result) {
                return res.json({ msg: 'Recruiter not found' });
            }
            res.json({ result });
        })
        .catch(error => res.status(500).json({ msg: 'Error deleting Recruiter', error }));
};

const createRecruiter = (req, res) => {
    Recruiter.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({ msg: error }));
};

const updateRecruiter = (req, res) => {
    Recruiter.findOneAndUpdate({ _id: req.params.recruiterID }, req.body, { new: true })
        .then(result => res.json({ result }))
        .catch(() => res.json({ msg: 'Recruiter not found' }));
};

module.exports = {
    getRecruiters,
    getRecruiter,
    createRecruiter,
    updateRecruiter,
    deleteRecruiter
};