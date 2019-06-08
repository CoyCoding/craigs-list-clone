const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

//create the express App
const app = express();

//create middleware to handle the serving of the App
app.use('/', serveStatic(path.join(__dirname, '/public')));

//create default port to serve the app
//replace process.env.PORT for actual server
const port = process.env.PORT || 5000;

app.listen(port);

console.log('server started on port ' + port);
