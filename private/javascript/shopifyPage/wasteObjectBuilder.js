const decode = require('unescape');
const { getWasteInfo } = require('./getWasteInfo');

const createWasteObject = (query, callback) => {
  getWasteInfo((err, wasteInfo) => {
    let data = { 'data': { 'query': query } };
    let results = [];
    wasteInfo.forEach(element => {
      const body = decode(element.body);
      // Changing query and keywords to lowercase for better matching
      query = query.toLowerCase().replace(/\s+/g, '');
      const keywords = element['keywords'].toLowerCase().replace(/\s+/g, '');
      if (keywords.includes(query) && query != '') {
        results.push({
          'title': element.title,
          'body': body
        });
      }
    });
    data['data']['results'] = results;
    callback(null, data);
  });
};

module.exports = { createWasteObject };