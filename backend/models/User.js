module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user'  
    }
  });

  // Associations
  User.associate = (models) => {
    User.hasMany(models.Booking, { foreignKey: "userId", as: "Bookings" });
  };

  return User;
};
