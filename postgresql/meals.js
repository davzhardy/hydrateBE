import { DataTypes } from "sequelize";

export function mealsFactory (sequelize) {
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
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
    }
  })
} 
