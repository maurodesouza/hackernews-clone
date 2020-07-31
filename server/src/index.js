const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');
const { PubSub } = require('graphql-yoga');


const resolvers = require('./resolvers');

const { resolve } = require('path');

const prisma = new PrismaClient();
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers,
  context: request => ({
    ...request,
    prisma,
    pubsub,
  }),
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
