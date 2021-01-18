async function getUser (root, args, context) {
  const user = await context.User.findOne({
    where: {
      username: args.username
    }
  })
  return user
}

export {
  getUser
}