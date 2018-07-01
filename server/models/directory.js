'use strict';

const mongoose = require('mongoose'), Schema = mongoose.Schema;

const DirectorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  email_address: { type: String, required: true },
  physical_address: { type: String, required: true },
  createdAt: { type: Date, required: true }
});

// Compile model from schema

module.exports = mongoose.model('Directory', DirectorySchema);