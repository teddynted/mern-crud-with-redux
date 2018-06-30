const express = require('express');
const path = require('path');
const app = express();
console.log(process.env);
app.use(express.static(path.join(__dirname, '../client/build')));