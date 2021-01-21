module.exports = `
  type Query {
    getUser (email: String!, password: String!): UserResponse
    getAllDrinks (UserId: Int!): [Drink]!
    getAllMeals (UserId: Int!): [Meal]!
  }
`