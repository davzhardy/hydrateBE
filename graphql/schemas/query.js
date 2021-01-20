module.exports = `
  type Query {
    getUser (email: String!, password: String!): User
    getAllDrinks (UserId: Int!): [Drink]!
    getAllMeals (UserId: Int!): [Meal]!
  }
`