const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { Room } = require("../models");


router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, price, availability } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const room = await Room.create({
      title,
      description,
      price,
      availability,
      imageUrl,
    });

    res.status(201).json(room);
  } catch (err) {
    console.error("Room creation error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all rooms
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (err) {
    console.error("Fetch rooms error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get room by ID
router.get("/:id", async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    console.error("Fetch room by ID error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
