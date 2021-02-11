const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'unsecure';

async function createUser (root, args, context) {
  const response = {
    status: '',
    userSuccessfullyCreated: false,
    error: {
      emailTaken: false,
      usernameTaken: false,
    },
    token: '',
    userData: {}
  } 
  const userEmail = await context.User.findOne({
    where: {
      email: args.email
    }
  })
  const userUsername = await context.User.findOne({
    where: {
      username: args.username
    }
  })
  if (userEmail) {
    response.error.emailTaken = true;
    response.status = 404;
    return response;
  } else if (userUsername) {
    response.error.usernameTaken = true;
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
  console.log(typeof newMeal)
  return newMeal
}

async function modifyMeal (root, args, context) {
  const response = {
    mealUpdated: false,
    meal: {},
  }
  const updateMeal = await context.Meals.update(
    {
      meal: args.meal
    },
    {
      where: {
        UserId: args.UserId,
        time: args.time,
      },
      returning: true
    }
  )
  if (updateMeal[0] === 1) {
    response.mealUpdated = true
    response.meal = updateMeal[1][0]
    return response
  } else {
    return response
  }
}

async function deleteMeal (root, args, context) {
  const response = {
    mealDeleted: false
  }
  console.log(args.meal)
  const deleteMeal = await context.Meals.destroy({
    where: {
      UserId: args.UserId,
      meal: args.meal,
      time: args.time,
    }
  })
  
  if (deleteMeal === 1) response.mealDeleted = true
  return response
}

async function modifyDrink (root, args, context) {
  const response = {
    drinkUpdated: false,
    drink: {},
  }
  const updateDrink = await context.Drinks.update(
    {
      drink: args.drink,
      cups: args.cups,
      volume: args.volume,
    },
    {
      where: {
        UserId: args.UserId,
        time: args.time,
      },
      returning: true
    }
  )
  if (updateDrink[0] === 1) {
    response.drinkUpdated = true
    response.drink = updateDrink[1][0]
    return response
  } else {
    return response
  }
}

async function deleteDrink (root, args, context) {
  const response = {
    drinkDeleted: false
  }
  const deleteMeal = await context.Drinks.destroy({
    where: {
      UserId: args.UserId,
      drink: args.drink,
      time: args.time,
    }
  })
  
  if (deleteMeal === 1) response.mealDeleted = true
  return response
}

module.exports = {
  createUser,
  postDrink,
  postMeal,
  modifyMeal,
  deleteMeal,
  modifyDrink,
  deleteDrink,
}