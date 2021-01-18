const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'unsecure';

async function createUser (root, args, context) {
  const response = {
    status: '',
    message: '',
    token: '',
    userData: {}
  } 
  const user = await context.User.findOne({
    where: {
      username: args.username
    }
  })
  if (user) {
    response.message = 'Email already used';
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
    response.message = 'User successfully generated';
    response.userData = newUser;
    delete response.userData.password;
    response.token = accessToken;
    return response
  }
}

module.exports = {
  createUser
}