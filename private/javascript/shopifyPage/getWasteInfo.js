const request = require('request');
const garbageInfo = require('../../data/json/swm_waste_wizard_APR.json');

const getWasteInfo = (callback) => {
  const options = {
    url: 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR',
    qs: { limit: '1000' }
  }
  request(options, (err, res, body) => {
    let parsedJson = JSON.parse(JSON.stringify(garbageInfo));
    if (err) {
      callback(null, parsedJson);
    } else {
      parsedJson = JSON.parse(body);
      callback(null, parsedJson);
    }
  });
};

module.exports = { getWasteInfo };