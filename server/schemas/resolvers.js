const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, username, password }) => {
      const user = await User.findOne(email ? { email } : { username });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    updateCourse: async (_, { id, evsrOwned, evsrCart, h2pOwned, h2pCart,how2Owned, how2Cart,wdbOwned, wdbCart,jsbOwned, jsbCart, js10Owned, js10Cart, hcfullOwned, hcfullCart, hc30Owned, hc30Cart, hcbOwned, hcbCart, pfullOwned, pfullCart, p30Owned, p30Cart, mdbbOwned, mdbbCart, efullOwned, efullCart, r60Owned, r60Cart, nfullOwned, nfullCart }) => {
      const courses = await User.findOneAndUpdate(
      { _id: id }, 
      { evsrOwned, evsrCart, h2pOwned, h2pCart,how2Owned, how2Cart,wdbOwned, wdbCart,jsbOwned, jsbCart, js10Owned, js10Cart, hcfullOwned, hcfullCart, hc30Owned, hc30Cart, hcbOwned, hcbCart, pfullOwned, pfullCart, p30Owned, p30Cart, mdbbOwned, mdbbCart, efullOwned, efullCart, r60Owned, r60Cart, nfullOwned, nfullCart },
      { new: true }
      );
      return courses;
    }
  }
};

module.exports = resolvers;
