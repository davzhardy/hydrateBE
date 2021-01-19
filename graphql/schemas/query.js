module.exports = `
  type Query {
    getUser (username: String!): User
    getAllDrinks (UserId: Int!): [Drink]!
    getAllMeals (UserId: Int!): [Meal]!
  }
`