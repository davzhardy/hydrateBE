const queries = require('./query')
const mutations = require('./mutation')

const resolvers = {
  Query: {
    getUser: queries.getUser,
    getAllDrinks: queries.getAllDrinks,
    getAllMeals: queries.getAllMeals,
  },
  Mutation: {
    createUser: mutations.createUser,
    postDrink: mutations.postDrink,
    postMeal: mutations.postMeal,
  },
}

module.exports = {
  resolvers
}