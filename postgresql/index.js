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

const sequelize = new Sequelize ('postgres://nppakpwlkbbomz:18ef7c34bf2931a50c82cb1521ee0c0ae3eeed24837b57aa6ab9ebdcf22c05ad@ec2-18-203-7-163.eu-west-1.compute.amazonaws.com:5432/d7jj77cc8t1p64')

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
