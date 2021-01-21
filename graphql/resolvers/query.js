const bcrypt = require('bcrypt');

async function getUser (root, args, context) {
  const response = {
    emailExists: null,
    passwordMatches: null,
    userData: {}
  }
  const user = await context.User.findOne({
    where: {
      email: args.email
    }
  })
  if (user) {
    response.emailExists = true;
    const validatePassword = await bcrypt.compare(args.password, user.dataValues.password)
      if (validatePassword) {
        response.passwordMatches = true;
        response.userData = user
        return response
      } else {
        response.passwordMatches = false;
        return response
      }
  } else {
    response.emailExists = false;
    return response
  }
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