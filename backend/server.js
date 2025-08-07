const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./models');
const path = require('path');
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Synchronize all models with the database
db.sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Import Routes
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');
const bookingRoutes = require('./routes/bookings');
const roomRoutes = require("./routes/room");
 

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/bookings', bookingRoutes);


app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // serve images

// Routes
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);

 

const PORT = process.env.PORT || 5000;
app.use('/api/profile', require('./routes/profile'));
app.use('/api/rooms', require('./routes/room'));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


