const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const db = {};

db.sequelize = sequelize;

// Import models
db.User = require('./User')(sequelize, DataTypes);
db.Booking = require('./Booking')(sequelize, DataTypes);
db.Room = require('./Room')(sequelize, DataTypes);
 
 

db.User.hasMany(db.Booking, { foreignKey: 'guestId',  targetKey: 'id' });
db.Booking.belongsTo(db.User, { foreignKey: 'guestId',  targetKey: 'id' });
 
// Room <-> Booking
db.Room.hasMany(db.Booking, { foreignKey: 'roomId', as: 'bookings' });
db.Booking.belongsTo(db.Room, { foreignKey: 'roomId', as: 'room' });
module.exports = db;