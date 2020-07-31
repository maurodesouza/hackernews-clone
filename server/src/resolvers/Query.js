const info = () => `This is the API of a Hackernews Clone`;

const feed = (parent, args, context) =>
  context.prisma.link.findMany();

const link = (parent, args, context) =>
  context.prisma.link.findOne({ where: { id: Number(args.linkId) } });

module.exports = {
  info,
  feed,
  link,
};
