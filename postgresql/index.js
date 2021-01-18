import { Sequelize } from 'sequelize'
import { mealsFactory } from './meals'
import { drinksFactory } from './drinks'

export const db = {}

export const sequelize = new Sequelize ('hydrateapp','davidhardy','admin', {
  host:'localhost',
  dialect: 'postgres'
})

db.Meals = mealsFactory(sequelize)
db.Drinks = drinksFactory(sequelize)

db.sequelize = sequelize

