const { Sequelize } = require('sequelize');
const { mealsFactory } = require('./meals')
const { drinksFactory } = require ('./drinks')
const { userFactory } = require ('./user')

const db = {}

const database = process.env.HEROKU_DATABASE || 'hydrateapp';
const username = process.env.HEROKU_USER || 'davidhardy';
const password = process.env.HEROKU_PASSWORD || 'admin';
const host = process.env.HEROKU_HOST || 'localhost';

const sequelize = new Sequelize (database, username, password, {
  host: host,
  dialect: 'postgres'
})

db.Meals = mealsFactory(sequelize)
db.Drinks = drinksFactory(sequelize)
db.User = userFactory(sequelize)

db.User.hasMany(db.Drinks)
db.User.hasMany(db.Meals)

db.Meals.belongsTo(db.User, {
  onDelete: 'CASCADE',
  foreignKey: {allowNull: false}
})

db.Drinks.belongsTo(db.User, {
  onDelete: 'CASCADE',
  foreignKey: {allowNull: false}
})


db.sequelize = sequelize

module.exports = {
  db,
  sequelize
}
