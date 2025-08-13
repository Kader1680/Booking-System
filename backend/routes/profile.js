const express = require('express');
const { User, Booking } = require('../models');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
 
 
   const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'name', 'email', 'gender', 'createdAt'],
      include: [
        {
          model: Booking,
          where: { guestId: req.user.id },
          required: false // so it returns user even without bookings
        }
      ]
    });
    
    if (!user) return res.status(404).json({ msg: 'User not found' });

    console.log(user)
    res.json(user);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg:  err });
  }
});

module.exports = router;
