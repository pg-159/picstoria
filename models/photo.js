// models/photo.js
module.exports = (sequelize, DataTypes) => {
  const photo = sequelize.define("photo", {
    imageUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    altDescription: DataTypes.STRING,
    dateSaved: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
    },
  });
  return photo;
};
