const { gql } = require('apollo-server'); 
const { resolvers }  = require('./resolvers'); 

const typeDefs = gql`
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
  type Query {
    getUser (username: String!): User
    getAllDrinks (UserId: Int!): [Drink]!
  }
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
  }
`

module.exports = {
  typeDefs,
  resolvers
}