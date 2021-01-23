const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'unsecure';

async function createUser (root, args, context) {
  const response = {
    status: '',
    userSuccessfullyCreated: false,
    error: {
      emailTaken: false,
    },
    token: '',
    userData: {}
  } 
  const user = await context.User.findOne({
    where: {
      email: args.email
    }
  })
  if (user) {
    response.error.emailTaken = true;
    response.status = 404;
    return response;
  } else {
    const hash = await bcrypt.hash(args.password, 10);
    const newUser = await context.User.create({
      username: args.username,
      password: hash,
      email: args.email,
    })
    const accessToken = jwt.sign(newUser.id, ACCESS_TOKEN_SECRET);
    response.status= 200;
    response.userSuccessfullyCreated = true;
    response.userData = newUser;
    delete response.userData.password;
    response.token = accessToken;
    return response
  }
}

async function postDrink (root, args, context) {
  const newDrink = await context.Drinks.create({
    drink: args.drink,
    cups: args.cups,
    volume: args.volume,
    time: args.time,
    UserId: args.UserId
  })
  return newDrink
}

async function postMeal (root, args, context) {
  const newMeal = await context.Meals.create({
    description: args.description,
    meal: args.meal,
    time: args.time,
    UserId: args.UserId
  })
  return newMeal
}

module.exports = {
  createUser,
  postDrink,
  postMeal
}