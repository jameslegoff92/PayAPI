const Data = require("../models/data");

exports.getIndex = (req, res) => {
  const partnerData = Data.getPartnerData();
  const servicesData = Data.getServicesData();

  res.render("pages/index", { 
    partnerData: partnerData,
    servicesData: servicesData
   });
};
