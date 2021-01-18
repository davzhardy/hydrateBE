const { DataTypes } = require("sequelize");

function drinksFactory (sequelize) {
  return sequelize.define('Drinks', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    drink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cups: {
      type: DataTypes.INTEGER,
    },
    volume: {
      type: DataTypes.INTEGER,
    },
    time: {
      type: DataTypes.STRING,
    }
  })
} 

module.exports = {
  drinksFactory
}
