const { User, Thought } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args) => {
      const foundUser = await User.findOne({
        $or: [
          { _id: user ? user._id : params.id },
          //to be changed to context later
        ],
      });

      return foundUser;
    },
  },
};

module.exports = resolvers;
