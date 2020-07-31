const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { APP_SECRET, getUserId } = require('../utils');

const post = async (parent, args, context) => {
  const userId = getUserId(context);

  const newLink = await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } },
    },
  });

  return newLink;
};

const updateLink = async (parent, args, context) => {
  const { linkId, ...rest } = args;

  const updatedLink = await context.prisma.link.update({
    where: {
      id: Number(linkId),
    },
    data: {
      ...rest,
    },
  });

  return updatedLink;
};

const deleteLink = async (parent, args, context) => {
  const deletedLInk = context.prisma.link.delete({
    where: {
      id: Number(args.linkId),
    },
  });

  return deletedLInk;
};

const signup = async (parent, args, context) => {
  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.user.create({ data: { ...args, password } });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
};

const login = async (parent, args, context) => {
  const user = await context.prisma.user.findOne({ where: { email: args.email } });

  if (!user) throw new Error('No such user found');

  const valid = await bcrypt.compare(args.password, user.password);

  if (!valid) throw new Error('Invalid password');

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

module.exports = {
  signup,
  login,
  post,
  updateLink,
  deleteLink,
};
