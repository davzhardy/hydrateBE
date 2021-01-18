const { gql } = require('apollo-server'); 
const { resolvers }  = require('./resolvers'); // this might not work

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type User {
    username: String
    password: String
    email: String
  }
  type Query {
    books: [Book]
    getUser (username: String!): User
  }
  type Mutation {
    createUser (
      username: String!
      password: String!
      email: String!
    ): User!
  }
`

const resolver = 
{
  Query: {
    books: () => books,
    getUser: resolvers.getUser
  },
}


const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of ',
    author: 'Paul Auster',
  },
];

module.exports = {
  typeDefs,
  resolver
}