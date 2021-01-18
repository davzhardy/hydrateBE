import { gql } from 'apollo-server' 
import { resolvers as resolver } from './resolvers'

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

const resolvers = 
{
  Query: {
    books: () => books,
    getUser: resolver.getUser
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

export {
  typeDefs,
  resolvers
}