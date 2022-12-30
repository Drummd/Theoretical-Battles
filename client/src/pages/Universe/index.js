// these queries are here for example ONLY
// import { QUERY_USERS } from '../../utils/queries';
// import { useQuery } from '@apollo/client';
// END example
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import './Universe.css';
import { Navigate, useLocation } from 'react-router-dom';
import React, { useState } from "react"
//import Dropdown from 'react-bootstrap/Dropdown';
// import NavItem from 'react-bootstrap/NavItem';
// import NavLink from 'react-bootstrap/NavLink';
// import { useQuery } from '@apollo/client'
// import { QUERY_Fighters } from '../../utils/queries'


//maybe use effect hook to pull up fighter 2 after fighter 1 is chosen
function Universe({data}) {
	
	const location = useLocation();
	console.log(location.state)
	const fighters = location.state.fighters

	// function handleSubmit(e) {
	// 	e.preventDefault()
	// 	data.fighter.character === e.target.value
	// 	const fighter1 = data.fighter.character
	// 	const fighter2 = data.fighter.character
	// 		if(fighter1 === e) {
	// 			const [fighter1, setfighter1] = useState()
	// 			Navigate('/Universe', {state: fighter1})
	// 		} then (fighter2 === e) {
	// 			const [fighter2, setfighter2] = useState()
	// 			Navigate('/Battle', {state: fighter2})
	// 		}
	//   }


	return (
		<div className="body-universe">
			

			<Row xs={1} md={5} className="g-5">
				{fighters.map((fighter) => (
					<Col>
						<Card>
							<Card.Img variant="top" src={fighter.image}/>
							<Card.Body>
								<Card.Title>{fighter.character}</Card.Title>
								<Card.Text>
									<ul>
										<li>Strength:{fighter.strength} </li>
										<li>Defense: {fighter.defense}</li>
										<li>Agility:{fighter.agility} </li>
										<li>Chance:{fighter.chance} </li>
										<li>Will:{fighter.will} </li>

									</ul>
								</Card.Text>
								<Button variant="danger">Fighter</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
}
export default Universe;



// {/* <Dropdown as={NavItem}>
// 				<Dropdown.Toggle as={NavLink}>Universes</Dropdown.Toggle>
// 				<Dropdown.Menu>
// 					<Dropdown.Item>Marvel Universe</Dropdown.Item>
// 					<Dropdown.Item>DC Universe</Dropdown.Item>
// 					<Dropdown.Item>Starwars Universe</Dropdown.Item>
// 					<Dropdown.Item>Naruto Universe</Dropdown.Item>
// 				</Dropdown.Menu>
// 			</Dropdown> */}
// 			{/* {loading && (
// 				<div>loading...</div>
// 			)} */}
// <h1>
// 	This is the Universe page.

// 	{loading ? (
// 		<div>Loading ...</div>
// 	) : (
// 			<div>
// 				{users.map(user => {
// 					return <p key={user._id}>{user.email}</p>
// 				})}
// 			</div>
// 	)}
// </h1>	
// const { loading, data } = useQuery(QUERY_USERS);
// const users = data?.users || [];
