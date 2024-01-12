const Company = require('../models/CompanyModel.js')
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
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
cloudinary.config({ 
  cloud_name: 'dh31yt1c5', 
  api_key: '892623454755429', 
  api_secret: '5roJ9umqhsxvCjiNO0Qx9uRAeu0' 
});
const createCompany = async (req, res) => {
  


  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create a new Company instance
    const newCompany = new Company({
      company_name: req.body.company_name,
      secteur: req.body.secteur,
      description: req.body.description,
      website: req.body.website,
      email: req.body.email,
      location: req.body.location,
      logo: result.secure_url // Store the Cloudinary URL directly
    });

    // Save the new company to MongoDB
    await newCompany.save();

    // Respond with success and the image URL
    res.json({ imageURL: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
    console.error(err);
  }
};  

const updateCompany = (req, res) => {
    const companyId = req.params.CompanyID;

    Company.findOneAndUpdate({ _id: companyId }, req.body, { new: true }) // { new: true } returns the updated document
        .then(updatedCompany => {
            if (updatedCompany) {
                res.json({ result: updatedCompany });
            } else {
                res.status(404).json({ msg: 'Company not found' });
            }
        })
        .catch(error => {
            console.error('Error updating company:', error);
            res.status(500).json({ msg: 'Internal server error' });
        });
};






module.exports = {
    getCompanys,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany
}