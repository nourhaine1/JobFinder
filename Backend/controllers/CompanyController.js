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
const createCompany = async (req, res) => {
  try {
    const imageBuffer = req.file.buffer;
    const base64String = imageBuffer.toString('base64'); // Get base64 representation

    const newCompany = new Company({
        company_name: req.body.company_name,
        secteur: req.body.secteur,
        description: req.body.description,
        website: req.body.website,
        email: req.body.email,
        location: req.body.location,
        logo: {
            data: imageBuffer,
            contentType: req.file.mimetype,
            filename: req.file.originalname,
            base64: base64String // Store base64 representation
        }
    });

    await newCompany.save();
    res.status(200).send('Image uploaded and saved successfully');
} catch (err) {
  console.error(err); // Log the error for further investigation
    res.status(500).send('Error uploading image');
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