const Company = require('../models/CompanyModel.js')
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
  const multer= require ('multer');
const getCompanys = ((req, res) => {
    Company.find({})
        .then(result => res.json({ result }))
        .catch(() => res.json({ msg: 'Companys not found' }))
})

const getCompany = (req, res) => {
    Company.findOne({ _id: req.params.CompanyID })
      .then(result => {
        if (!result) {
          return res.json({ msg: 'Company not found' });
        }
        res.json({ result });
      })
      .catch(error => res.json({ msg: 'Error finding Company', error }));
  };
  
 
  const deleteCompany = ((req, res) => {
    Company.findOneAndDelete({ _id: req.params.CompanyID })
        .then(result => {
            if (!result) {
                return res.json({ msg: 'Company not found' });
            }
            res.json({ result });
        })
        .catch(error => res.status(500).json({ msg: 'Error deleting Company', error }));
})



/*const createCompany = ((req, res) => {
    Company.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({ msg: error }))
})
*/
//creation du middleware multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/uploads/'); // Set your upload directory here
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
const createCompany = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }

  // Extract form data from the request
  const { company_name, secteur, description, website, email, location } = req.body;

  // Create a new Company object
  const newCompany = new Company({
    company_name,
    secteur,
    description,
    website,
    email,
    location,
    logo: {
      data: req.file.buffer, // Assuming Multer provides a buffer for the uploaded file
      contentType: req.file.mimetype,
      filename: req.file.originalname // File's MIME type
    },
  });

  try {
    // Save the new company to the database
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany); // Send the saved company as a response
  } catch (err) {
    res.status(500).send('Failed to create the company.'); // Handle error if save fails
  }
};
     

const updateCompany = ((req, res) => {
    Company.findOneAndUpdate({ _id: req.params.CompanyID })
        .then(result => res.json({ result }))
        .catch(() => res.json({ msg: 'Company not found' }))
})





module.exports = {
    getCompanys,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany
}