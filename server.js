const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const categoryData = require('./data/categories.js');
const cityData = require('./data/cities.js');
const itemData = require('./data/items.js');
//create the express App
const app = express();

//create middleware to handle the serving of the App
app.use('/', serveStatic(path.join(__dirname, '/public')));

//api returns json of all cities
app.get('/api/:cities', function(req, res){
  res.json(cityData);
});

//api returns all Categories for a city
app.get('/api/:cities/:categories', function(req, res){
  res.json(categoryData);
});

//api returns all listings(items) from category in a city
app.get('/api/:cities/:categories/:listings/', function(req, res){
  res.json(categoryData);
});

//api returns the selected item from listing
app.get('/api/:cities/:categories/:listings/:items', function(req, res){
  res.json(itemData);
});



//api


app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
})
//create default port to serve the app
//replace process.env.PORT for actual server
const port = process.env.PORT || 5000;

app.listen(port);

console.log('server started on port ' + port);
