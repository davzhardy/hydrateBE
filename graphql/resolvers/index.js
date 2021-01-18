const queries = require('./query')
const mutations = require('./mutation')

const resolvers = {
  Query: {
    getUser: queries.getUser,
  },
  Mutation: {
    createUser: mutations.createUser
  },
}

module.exports = {
  resolvers
}