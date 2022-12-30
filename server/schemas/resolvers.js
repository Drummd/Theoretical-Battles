const { AuthenticationError } = require('apollo-server-express');
// const { QUERY_Fighters } = require('../../client/src/utils/queries');
const { User, Fighter} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		users: async () => {
			return await User.find({}).select('-password');
		},
		
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		
		// universes: async () => {
		// 	return await Universe.find({});
		// },
		getFighters: async (parent, { name }) => {
			const fighters = await Fighter.findOne({ name: name}).populate('fighters');
			return fighters;
		},
		fighters : async () => {
			const fighters = await Fighter.find({})
			console.log(fighters)
			return fighters
			
		}

	},

	Mutation: {
		addUser: async (_, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
	  
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
	},
};

module.exports = resolvers;
