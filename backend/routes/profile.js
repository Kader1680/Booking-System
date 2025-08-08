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
          include: [{ 
            model: Room,
            attributes: ['id', 'title']
          }],
        }
      ],
    });

 

    res.status(200).json({
      success: true,
      data: user
    });


    
  } catch (err) {
    console.error("Profile error:", err);
    res.status(500).json({ 
      success: false,
      message: "Server error",
      error: err.message 
    });
  }
});

module.exports = router;