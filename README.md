GraphQL
Postgres
SQL
Node.js
ApolloServer

To-dos

Try and catch methodology for queries
Create user needs to check for email aswell
Update and delete drinks/meals

Sent jwt token inside cookie
https://livecodestream.dev/post/a-practical-guide-to-jwt-authentication-with-nodejs/


## Dumping DB from local to Heroku
Run this: 

PGPASSWORD=<mypassword> pg_dump -Fc --no-acl --no-owner -h localhost -U davidhardy <dbtodump> <dbtodump>.dump

Then this:

heroku pg:psql DATABASE_URL --app <herokuappname> < <dbtodump>.dump