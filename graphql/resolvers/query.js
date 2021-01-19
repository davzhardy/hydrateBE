async function getUser (root, args, context) {
  const user = await context.User.findOne({
    where: {
      username: args.username
    }
  })
  return user
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