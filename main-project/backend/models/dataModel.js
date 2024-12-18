// models/dataModel.js
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  }
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
