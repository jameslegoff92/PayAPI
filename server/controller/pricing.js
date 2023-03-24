const data = require('../models/data');

exports.getPriceData = (req, res) => {
  const pricingData = data.getPricingData();
  const features = data.getFeatures();

  res.render('pages/pricing', {
    pricingData: pricingData,
    features: features
  })
}