const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost/directory';

const http = require('http');

mongoose.connect( mongoURL, (err, db) => {
    if(err) console.log( 'mongodb Error: ' + err );
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cors());

app.use(bodyParser.json());
app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
});

const server = http.createServer(app);

const routes = require('./routes/index')();
app.use('/', routes);

server.listen(port);