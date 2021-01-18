const queries = require('./query')

const resolvers = {
  getUser: queries.getUser
}

module.exports = {
  resolvers
}