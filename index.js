const express = require('express');
const app = express();
const { search } = require('./private/javascript/shopifyPage/searchController.js');

app.use(express.static(__dirname + '/public'));

// Setting the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/timely', (req, res) => {
  res.render('pages/timely');
});

app.get('/shopifyApp', (req, res) => {
  res.render('pages/shopify');
});

app.get('/shopifyApp/search', search);

app.listen(3000, () => {
  console.log('My website running on port 3000');
});