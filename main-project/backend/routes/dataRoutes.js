// routes/dataRoutes.js
const express = require('express');
const Data = require('../models/dataModel');
const router = express.Router();

// Get all data from MongoDB
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post new data to MongoDB
router.post('/', async (req, res) => {
  const { name, coordinates } = req.body;

  const newData = new Data({
    name,
    coordinates
  });

  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
