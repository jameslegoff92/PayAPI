const data = require('../models/data');

exports.getContact = (req, res) => {
  const partners = data.getPartnerData();
  res.render('pages/contact', {
    partners
  })
}