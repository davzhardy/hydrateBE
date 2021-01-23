module.exports = `
  type User {
    id: Int,
    username: String,
    password: String,
    email: String
  }
  type UserCreation {
    userSuccessfullyCreated: Boolean!,
    error: CreateUserError,
    token: String,
    status: Int!,
    userData: User
  }
  type UserResponse {
    emailExists: Boolean,
    passwordMatches: Boolean,
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
  type CreateUserError {
    emailTaken: Boolean!
  }
`