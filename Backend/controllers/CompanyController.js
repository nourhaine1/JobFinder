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