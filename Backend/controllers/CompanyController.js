const Company = require('../models/CompanyModel.js')
const fs = require('fs');
const formidable = require('formidable');
  
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
const createCompany = (req, res) => {
    const form = new formidable.IncomingForm();
  
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ msg: 'Error parsing form data', error: err });
      }
  
      const {
        company_name: [companyName], // Assuming company_name is an array with a single string
        secteur: [sector],
        description: [desc],
        website: [web],
        email: [mail],
        location: [loc],
      } = fields;
  
      const logoFiles = files.logo;
  
      if (!logoFiles || !Array.isArray(logoFiles) || logoFiles.length === 0) {
        return res.status(400).json({ msg: 'No logo file uploaded' });
      }
  
      const logoFile = logoFiles[0];
  
      if (!logoFile || !logoFile.filepath) {
        return res.status(400).json({ msg: 'No logo file path found' });
      }
  
      fs.readFile(logoFile.filepath, (readErr, data) => {
        if (readErr) {
          return res.status(500).json({ msg: 'Error reading file', error: readErr });
        }
  
        const newCompany = new Company({
          company_name: companyName,
          secteur: sector,
          description: desc,
          website: web,
          email: mail,
          location: loc,
          logo: {
            data,
            contentType: logoFile.mimetype,
            filename: logoFile.originalFilename
          }
        });
  
        newCompany.save()
          .then(result => {
            res.status(200).json({ result });
          })
          .catch(saveError => {
            res.status(500).json({ msg: 'Error saving company', error: saveError });
          });
      });
    });
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