const links = (parent, args, context) => 
  context.prisma.user.findOne({ where: { id: parent.id } }).links();

module.exports = {
  links,
};
