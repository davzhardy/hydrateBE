const { Sequelize } = require('sequelize');
const { mealsFactory } = require('./meals')
const { drinksFactory } = require ('./drinks')
const { userFactory } = require ('./user')

const db = {}

const database = process.env.DATASBASE;
const username = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST || 'localhost';

// const sequelize = new Sequelize (database, username, password, {
//   host: host,
//   dialect: 'postgres',
//   // dialectOptions: {
//   //   ssl: false
//   // }
// })

const sequelize = new Sequelize (process.env.DATABASE_URL)

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
