const queries = require('./query')
const mutations = require('./mutation')

const resolvers = {
  Query: {
    getUser: queries.getUser,
    getAllDrinks: queries.getAllDrinks,
  },
  Mutation: {
    createUser: mutations.createUser,
    postDrink: mutations.postDrink,
  },
}

module.exports = {
  resolvers
}