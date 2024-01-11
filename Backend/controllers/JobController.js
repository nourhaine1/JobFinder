const Job = require('../models/JobModel.js')


const getJobs = ((req, res) => {
    Job.find({})
        .then(result => res.json({ result }))
        .catch(() => res.json({ msg: 'Jobs not found' }))
})

const getJob = (req, res) => {
    Job.findOne({ _id: req.params.JobID })
      .then(result => {
        if (!result) {
          return res.json({ msg: 'Job not found' });
        }
        res.json({ result });
      })
      .catch(error => res.json({ msg: 'Error finding Job', error }));
  };
  

  const deleteJob = ((req, res) => {
    Job.findOneAndDelete({ _id: req.params.JobID })
        .then(result => {
            if (!result) {
                return res.json({ msg: 'Job not found' });
            }
            res.json({ result });
        })
        .catch(error => res.status(500).json({ msg: 'Error deleting Job', error }));
})


const createJob = ((req, res) => {
    Job.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({ msg: error }))
})

const updateJob = ((req, res) => {
    Job.findOneAndUpdate({ _id: req.params.JobID })
        .then(result => res.json({ result }))
        .catch(() => res.json({ msg: 'Job not found' }))
})


const getJobsByUserId = async (req, res) => {
    try {
      const jobs = await Job.find({ user_id: req.params.UserId }).exec();
      res.json({ jobs }); // Assuming you want to send the jobs as a JSON response
    } catch (error) {
      console.error('Error fetching jobs by user ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  





module.exports = {
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    getJobsByUserId
}