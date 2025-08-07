const express = require("express");
const router = express.Router();
const { User, Booking, Room } = require("../models");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'name', 'email', 'gender'],
      include: [
        {
          model: Booking,
          include: [{ model: Room }],
        },
      ],
    });

    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("Profile error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
