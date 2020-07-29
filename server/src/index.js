const { GraphQLServer } = require('graphql-yoga');
const { resolve } = require('path');

let links = [];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (parent, args) => links.find(link => Number(link.id) === Number(args.linkId)),
  },

  Mutation: {
    post: (parent, args) => {
       const link = {
        id: idCount++,
        description: args.description,
        url: args.url,
      };

      links.push(link);

      return link;
    },

    updateLink: (parent, args) => {
      let updatedLink = null
      
      const { linkId, ...rest } = args;

      links = links.map(link => {
        if (Number(link.id) === Number(linkId)) {

          updatedLink = {
            ...link,
            ...rest
          };

          return updatedLink
        }

        return link;
      })

     return updatedLink;
   },

    deleteLink: (parent, args) => {
      let deletedLink = null;
  
      links = links.filter(link => {
        if (Number(link.id) !== Number(args.linkId)) return;

        deletedLink = link;
      });

      return deletedLink;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
