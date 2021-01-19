module.exports = `
  type User {
    id: Int,
    username: String,
    password: String,
    email: String
  }
  type UserCreation {
    message: String!,
    token: String,
    status: Int!,
    userData: User
  }
  type Drink {
    drink: String!,
    cups: Int,
    volume: Int,
    time: String!,
    UserId: Int!,
  }
  type Meal {
    description: String!,
    meal: [String]!,
    time: String!,
    UserId: Int!,
  }
`