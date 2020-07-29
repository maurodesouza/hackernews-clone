const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client')

const { resolve } = require('path');

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,

    feed: (parent, args, context) => context.prisma.link.findMany(),

    link: (parent, args, context) => context.prisma.link.findOne({ where: { id: Number(args.linkId) } }),
  },

  Mutation: {
    post: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      })
      return newLink
    },

    updateLink: (parent, args, context) => {
      const { linkId, ...rest } = args;
  
      const updatedLink = context.prisma.link.update({
        where: {
          id: Number(linkId),
        },
        data: {
          ...rest,
        },
      });

      return updatedLink;
    },

    deleteLink: (parent, args, context) => {
      const deletedLInk = context.prisma.link.delete({
        where: {
          id: Number(args.linkId),
        },
      });

      return deletedLInk;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
