const express = require("express");
const router = express.Router();
const { User, Booking, Room } = require("../models");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const users = await User.findAll();
    const rooms = await Room.findAll();
    const bookings = await Booking.findAll();

 
     
     res.status(200).json({
      success: true,
      data: {
        users,
        rooms,
        bookings
      }
    }); 
  } catch (err) {
    console.error("User error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});




module.exports = router;
