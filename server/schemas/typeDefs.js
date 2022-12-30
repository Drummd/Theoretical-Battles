const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
	}

	type Auth {
		token: ID!
		user: User
	}


	type Fighter {
		fighterId: ID
		image: String
		character: String
		universe: String
		strength: Int
		defense: Int
		agility: Int
		will: Int
		chance: Int
		
	}

	type Universe {
		name: String
		fighters: [Fighter]
	}

	type Query {
		users: [User]
		me: User
		fighters:[Universe]
		getFighters(name: String!): Universe
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth

	}
`;

module.exports = typeDefs;
