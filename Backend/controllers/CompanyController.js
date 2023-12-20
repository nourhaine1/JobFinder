const Company = require('../models/CompanyModel.js')


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


const createCompany = ((req, res) => {
    Company.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({ msg: error }))
})

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