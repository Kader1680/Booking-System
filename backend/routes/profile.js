const express = require('express');
const { User } = require('../models');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'name', 'email', 'gender', 'createdAt'],
     
    });

    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
