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
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Synchronize all models with the database
db.sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Import Routes
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');
const roomRoutes = require("./routes/room");
const profileRoutes = require("./routes/profile");
 

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);


app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // serve images

// Routes
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);

 


app.use('/api/profile', profileRoutes);
app.use('/api/rooms', require('./routes/room'));

app.use('/api/analytics', require('./routes/dashboardAnalytics'));


const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


