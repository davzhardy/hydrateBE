module.exports = `
  type Mutation {
    createUser (
      username: String!,
      password: String!,
      email: String!
    ): UserCreation!
    postDrink (
      username: String!,
      UserId: Int!,
      drink: String!,
      cups: Int,
      volume: Int,
      time: String!,
    ): Drink!
    postMeal (
      username: String!,
      UserId: Int!,
      description: String!
      meal: [String]!,
      time: String!,
    ): Meal!
  }
`