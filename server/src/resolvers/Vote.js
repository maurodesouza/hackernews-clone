const link = (parent, args, context) =>
  context.prisma.vote.findOne({ where: { id: parent.id } }).link();

const user = (parent, args, context) => 
  context.prisma.vote.findOne({ where: { id: parent.id } }).user();

module.exports = {
  link,
  user,
};
