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


module.exports = {
  getUser,
  getAllDrinks
}