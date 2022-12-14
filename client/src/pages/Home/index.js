import React, { useState } from 'react';

import "./home.css"
import DC from '../../assets/DC.png'
import MAR from '../../assets/Marvel.png'
import STA from '../../assets/Starwars.jpg'
import NAR from '../../assets/Naruto.jpg'
import { useQuery } from '@apollo/client'
import { QUERY_Universes } from '../../utils/queries'
import UniverseCard from '../../components/UniverseCard';
import FighterCards from '../../components/FightersCards';
import BattleCards from '../../components/BattleCards';
import LoginForm from '../../components/LoginForm/Login';
import auth from "../../utils/auth"

function Home() {

  const { data, loading } = useQuery(QUERY_Universes);

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

  console.log("query_universes data", data)
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
    <div className="card-line">
      <div className="card-group">

        {loading ? (<div>Loading...</div>) : renderUniverseOrFighter()}


      </div>

    </div>
  );

}
export default Home;

