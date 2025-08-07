const express = require('express');
const router = express.Router();
const db = require('../models');
const Property = db.Property;
const auth = require('../middleware/authMiddleware');

// @route   GET api/properties
// @desc    Get all properties
// @access  Public
router.get('/', async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/properties/:id
// @desc    Get a single property by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id, { include: 'host' });
    if (!property) {
      return res.status(404).json({ msg: 'Property not found' });
    }
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/properties
// @desc    Add a new property (Host only)
// @access  Private
router.post('/', auth, async (req, res) => {
  const { title, description, pricePerNight, location, images, amenities, type } = req.body;
  try {
    const newProperty = await Property.create({
      title,
      description,
      pricePerNight,
      location,
      images,
      amenities,
      type,
      hostId: req.user.id,
    });
    res.json(newProperty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;