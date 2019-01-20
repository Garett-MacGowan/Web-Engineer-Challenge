const { validationResult } = require('express-validator/check');
const { createWasteObject } = require('./wasteObjectBuilder');

const search = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Someone is snaking
  } else {
    // Form data valids
    createWasteObject(req.query.item, (err, data) => {
      res.render('pages/shopify', data);
    });
  }
};

module.exports = { search };