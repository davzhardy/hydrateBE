async function createUser (root, args, context) {
  const user = await context.User.findOne({
    where: {
      username: args.username
    }
  })
  return user
}

export {
  createUser
}