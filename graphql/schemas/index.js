const { gql } = require('apollo-server');
const query = require('./query');
const mutation = require('./mutation');
const type = require('./type');

module.exports = gql`
  ${query}
  ${mutation}
  ${type}
`;