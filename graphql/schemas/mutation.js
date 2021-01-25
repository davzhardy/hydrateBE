module.exports = `
  type Mutation {
    createUser (
      username: String!,
      password: String!,
      email: String!
    ): UserCreation!
    postDrink (
      UserId: Int!,
      drink: String!,
      cups: Int,
      volume: Int,
      time: String!,
    ): Drink!
    postMeal (
      UserId: Int!,
      description: String!
      meal: [String]!,
      time: String!,
    ): Meal!
    modifyMeal (
      UserId: Int!,
      meal: [String]!,
      time: String!,
    ): ModifyMealResponse!
    deleteMeal (
      UserId: Int!,
      meal: [String]!,
      time: String!,
    ): DeleteMealResponse!
  }
`