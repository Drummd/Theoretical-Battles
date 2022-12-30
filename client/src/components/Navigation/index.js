//import { Link } from 'react-router-dom';
import './nav.css'
import Logo from "../../assets/104093148.png";
import Navbar from './Navbar'
//import { Nav, Navbar, NavLink } from 'react-bootstrap';


function Navigation() {
	return (
		<nav>
			<div class="jumbotron">
				<img id="logo-main" src={Logo} />
				{Navbar}
				<p className="lead"> In this place, powerful beings from different worlds can clash and test their strength against one another, with the outcome of these battles shaping the fate of the multiverse.</p>
				
			
			</div>

			{/* <Navbar collapseOnSelect expand="sm" bg="">
				<Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
				<Navbar.Collapse id="navbarScroll">
					<Nav>
						<NavLink eventKey="1" as={Link} to="/">Home</NavLink>
						<NavLink eventKey="2" as={Link} to="/Universe">Universe</NavLink>
						<NavLink eventKey="3" as={Link} to="/Battle">Battle</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar> */}
			
		</nav>
	);
}

export default Navigation;

