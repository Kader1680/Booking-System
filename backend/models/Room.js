module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.FLOAT, allowNull: false },
    availability: { type: DataTypes.STRING, defaultValue: "available" },
    imageUrl: { type: DataTypes.STRING },  
  });

  Room.associate = (models) => {
    Room.hasMany(models.Booking, { foreignKey: "roomId", as: "Bookings" });
  };

  return Room;
};
