import { DataTypes } from "sequelize";

export function drinksFactory (sequelize) {
  return sequelize.define('Drinks', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    drink: {
      type: DataTypes.STRING,
      unique: true,
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
