import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "./home.css"
import DC from '../../assets/DC.png'
import MAR from '../../assets/Marvel.png'
import STA from '../../assets/Starwars.jpg'
import NAR from '../../assets/Naruto.jpg'
//import { useQuery } from '@apollo/client'
//import { QUERY_Universe } from '../../utils/queries'
import { useQuery } from '@apollo/client'
import { QUERY_Universes } from '../../utils/queries'
//import { useLazyQuery } from '@apollo/client';
import UniverseCard from '../../components/UniverseCard';
// import Universe from '../Universe';
import FighterCards from '../../components/FightersCards';
import BattleCards from '../../components/BattleCards';
import LoginForm from '../../components/LoginForm/Login';
import auth from "../../utils/auth"

function Home() {
  const navigate = useNavigate()
  const { data, loading } = useQuery(QUERY_Universes);
  // const [battleObj, setBattleObj] = useState({
  //   universe1: '',
  //   universe2: '',
  //   fighter1: '',
  //   fighter2: ''
  // });
  const [universe1, setUniverse1] = useState('');
  const [fighter1, setFighter1] = useState({});
  const [universe2, setUniverse2] = useState('');
  const [fighter2, setFighter2] = useState({});



  const universeData = [
    {
      title: 'Marvel',
      description: 'The Marvel Universe is home to a diverse array of powerful fighters with unique abilities and strengths.',
      image: MAR
    },
    {
      title: 'DC',
      description: 'The heroes and villains of the DC Universe are iconic figures who have captivated audiences with their unique abilities and complex personalities.',
      image: DC
    },
    {
      title: 'StarWars',
      description: 'The Star Wars universe is filled with complex heroes and villains who battle for control of the galaxy.',
      image: STA
    },
    {
      title: 'Naruto',
      description: 'The heroes and villains of the Naruto Universe are complex and multifaceted, with their motivations and actions driving the story forward.',
      image: NAR
    },
  ];

  console.log(data)
  const fighters = data?.fighters || [];
  const dcFighters = fighters.filter(universe => universe.name === 'DC')[0];
  const marvelFighters = fighters.filter(universe => universe.name === 'Marvel')[0];
  const starWarsFighters = fighters.filter(universe => universe.name === 'StarWars')[0];
  const narutoFighters = fighters.filter(universe => universe.name === 'Naruto')[0];

  const fightersObj = {
    'DC': dcFighters,
    'Marvel': marvelFighters,
    'StarWars': starWarsFighters,
    'Naruto': narutoFighters
  };

  console.log(dcFighters);
  //const universes = data?.universes || [];
  // const [getFighters, {loading, data, error} ] = useLazyQuery(QUERY_Fighters);

  function handleSubmit(e) {
    e.preventDefault()
    // getFighters({variables: {name: e.target.value}})
    console.log(fighters)
    const filteredFighters = fighters.filter(universe => {
      return universe.name === e.target.value;
    });
    console.log(filteredFighters[0].fighters);
    // filter based on which universe was clicked
    navigate("/Universe", { state: { fighters: filteredFighters[0].fighters } })
  }

  const renderUniverseOrFighter = () => {

    if (!auth.loggedIn()) {
      return <LoginForm />
    } else if (!universe1) {
      return universeData.map(universe => <UniverseCard title={universe.title} description={universe.description} image={universe.image} updateState={setUniverse1} />);
    } else if (universe1 && !fighter1.strength) {
      return loading ? (<div>Loading...</div>) : <FighterCards fighters={fightersObj[universe1]} updateState={setFighter1} />
    } else if (universe1 && fighter1.strength && !universe2) {
      return universeData.map(universe => <UniverseCard title={universe.title} description={universe.description} image={universe.image} updateState={setUniverse2} />);
    } else if (universe1 && fighter1.strength && universe2 && !fighter2.strength) {
      return loading ? (<div>Loading...</div>) : <FighterCards fighters={fightersObj[universe2]} updateState={setFighter2} />
    } else if (universe1 && fighter1.strength && universe2 && fighter2.strength) {
      return loading ? (<div>Loading...</div>) : <BattleCards fighter1={fighter1} fighter2={fighter2} />


    }
  }

  return (
    <fragment className="card-line">
      <div class="card-group">

        {loading ? (<div>Loading...</div>) : renderUniverseOrFighter()}


      </div>

    </fragment>
  );

}
export default Home;

// {/* {loading && (
//       <div>loading...</div>
//      )} */}
// 		<Row xs={1} md={4} className="g-4">
//       {universes.map((universe) => ( 
//         <Col>
//           <Card>
//             <Card.Img variant="top" src={universe.image} />
//             <Card.Body>
//               <Card.Title>{universe.title}</Card.Title>
//               <Card.Text>
//                 { universe.description}
//               </Card.Text>
//{/* <div>
//<Link to="/Universe">
//<Button variant="danger">Universe</Button>
// </Link>
//</div> */}

//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>





// <>
// 	<Card className='card_format' style={{ width: '18rem' }}>
// 		<Card.Img variant="top" src="holder.js/100px180" />
// 		<Card.Body>
// 			<Card.Title>Universe Name</Card.Title>
// 			<Card.Text>
// 				open chat ai to describe each universe as fighters
// 			</Card.Text>
// 			<Button variant="danger">Universe</Button>
// 		</Card.Body>
// 	</Card>
// </>
