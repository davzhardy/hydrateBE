const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql')
const { sequelize, db } = require('./postgresql')

const server = new ApolloServer({typeDefs, resolvers, context: db});

const PORT = process.env.HEROKU_PORT || 4000;

(async function () {
  try {
    await db.sequelize.authenticate();
    console.log('authentication successful');
    // await db.sequelize.sync();  // {force:true}
    server.listen(
      { port: PORT },
      () => console.log(`Server ready at port ${PORT}`)
    );
  }
  catch (err) {
    console.log(err);
  }
})();
