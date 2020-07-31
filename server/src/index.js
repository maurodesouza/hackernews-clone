const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');

const resolvers = require('./resolvers');

const { resolve } = require('path');

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
