// routes/admin.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware'); // JWT authentication
const checkRole = require('../middleware/checkRole');

router.get('/az', auth, checkRole(['admin']), (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;
