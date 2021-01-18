const { gql } = require('apollo-server'); 
const { resolvers }  = require('./resolvers'); // this might not work

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
  type Query {
    getUser (username: String!): User
  }
  type Mutation {
    createUser (
      username: String!,
      password: String!,
      email: String!
    ): UserCreation!
  }
`

module.exports = {
  typeDefs,
  resolvers
}