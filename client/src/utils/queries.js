import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
	query Query {
		users {
			username
			email
			_id
		}
	}
`;

export const QUERY_ME = gql`
	query Query {
		me {
			username
			email
			_id
		}
	}
`;
//get only universe img, title, description
export const QUERY_Fighters = gql`
    query Query($name: String!) {
        getFighters(name: $name) {
            fighters {
                fighterId
                character
                image
                strength
                defense
                agility
                chance
                will
            }
        }
    }
`;

export const QUERY_Universes = gql`
    query getUniverses {
        fighters {
            name
            fighters {
                fighterId
                image
                character
                universe
                strength
                defense
                agility
                will
                chance
            }
        }
     }
`;

// export const QUERY_Universe = gql`
//     query Query($name: String!) {
//         getFighters(name: $name) {
//             name
//         }
//     }
// `;

// export const QUERY_Chosen = gql`

// `;



