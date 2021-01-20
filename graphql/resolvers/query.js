const bcrypt = require('bcrypt');

async function getUser (root, args, context) {
  const user = await context.User.findOne({
    where: {
      email: args.email
    }
  })
  const validatePassword = await bcrypt.compare(args.password, user.dataValues.password)
  console.log(validatePassword)
  if (validatePassword) return user
  else return null
}

async function getAllDrinks (root, args, context) {
  const drinks = await context.Drinks.findAll({
    where: {
      UserId: args.UserId
    }
  })
  return drinks
}

async function getAllMeals (root, args, context) {
  const meals = await context.Meals.findAll({
    where: {
      UserId: args.UserId
    }
  })
  return meals
}

module.exports = {
  getUser,
  getAllDrinks,
  getAllMeals
}