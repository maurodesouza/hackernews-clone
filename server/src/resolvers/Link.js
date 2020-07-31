const postedBy = (parent, args, context) =>
  context.prisma.link.findOne({ where: { id: parent.id } }).postedBy()

module.exports = {
  postedBy,
};
