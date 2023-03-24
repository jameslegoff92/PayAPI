const data = require('../models/data');

exports.getAbout = (req, res) => {
  let values = data.getValues();
  let stats = data.getStats();
  let firstArr = values.slice(0,2);
  let secondArr = values.slice(2,4);

  res.render('pages/about', 
    {
      firstArr,
      stats,
      secondArr
    }
  )
}
