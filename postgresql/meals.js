const { DataTypes } = require("sequelize");

function mealsFactory (sequelize) {
  return sequelize.define('Meals', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    meal: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
    }
  })
} 

module.exports = {
  mealsFactory
}
