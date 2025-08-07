// routes/bookings.js
const express = require("express");
const router = express.Router();
const { Booking, Room } = require("../models");
const auth = require("../middleware/authMiddleware");

// Create booking
router.post("/", auth, async (req, res) => {
  const { guestId, roomId, checkIn, checkOut } = req.body;

  try {
    const room = await Room.findByPk(roomId);
    if (!room) return res.status(404).json({ msg: "Room not found" });

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = checkOutDate - checkInDate;
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (nights <= 0) {
      return res.status(400).json({ msg: "Invalid date range." });
    }

    const totalPrice = nights * room.price;

    const booking = await Booking.create({
      guestId,
      roomId,
      checkIn,
      checkOut,
      totalPrice,
    });

    res.status(201).json({ booking });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get bookings of logged-in user
router.get("/my", auth, async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { guestId: req.user.id },
      include: [{ model: Room, as: "room" }],
    });
    res.json(bookings);
  } catch (err) {
    console.error("Get bookings error:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
