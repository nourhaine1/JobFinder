const Application = require('../models/ApplicationModel.js')


const getApplications = ((req, res) => {
    Application.find({})
        .then(result => res.json({ result }))
        .catch(() => res.json({ msg: 'Applications not found' }))
})



  const deleteApplication = ((req, res) => {
    Application.findOneAndDelete({ _id: req.params.ApplicationID })
        .then(result => {
            if (!result) {
                return res.json({ msg: 'Application not found' });
            }
            res.json({ result });
        })
        .catch(error => res.status(500).json({ msg: 'Error deleting Application', error }));
})


const createApplication = ((req, res) => {
    Application.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({ msg: error }))
})


const doesApplicationExist = async (req, res) => {
    try {
      const result = await Application.findOne({ user_id: req.params.UserID, job_id: req.params.JobID });
      
      if (result) {
        res.json({ exists: true });
      } else {
        res.json({ exists: false });
      }
    } catch (error) {
      console.error('Error finding application:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const getApplicationsByJobId = async (req, res) => {
    try {
      const applications = await Application.find({ job_id: req.params.JobId }).exec();
      res.json({ applications }); // Assuming you want to send the jobs as a JSON response
    } catch (error) {
      console.error('Error fetching applications by job ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const getApplicationsByUserId = async (req, res) => {
    try {
      const applications = await Application.find({ user_id: req.params.UserId }).exec();
      res.json({ applications }); // Assuming you want to send the jobs as a JSON response
    } catch (error) {
      console.error('Error fetching applications by user ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  







module.exports = {
    getApplications,
    createApplication,
    deleteApplication,
    doesApplicationExist,
    getApplicationsByJobId,
    getApplicationsByUserId
}