import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
//import './Battle.css'
import Annie from '../../assets/Anakin.jpg'
import Toe from '../../assets/Wolverine.jpg'
//<a href="#" onclick="someFunction(); return false;">LINK</a> 



//function Battle({data}) {}
function Battle() {
  // const determineWinner = (fighter1, fighter2) => {
  //   let survivor = null;

  //   // Check if dataSet1 has higher overall strength, defense, agility, chance and willpower than dataSet2
  //   if (fighter1.strength > fighter2.strength &&
  //       fighter1.defense > fighter2.defense &&
  //       fighter1.agility > fighter2.agility &&
  //       fighter1.chance > fighter2.chance &&
  //       fighter1.willpower > fighter2.willpower) {
  //     survivor = fighter1;
  //   } else {
  //     survivor = fighter2;
  //   }

  //   return survivor;
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   determineWinner()
  //   if(fighter1 > fighter2) {
  //     return fighter.character 'won this match'
  //   } else (fighter2 > fighter1) {
  //     return fighter.character 'won this match'
  //   }
  // }

  return (
    <container className='grid-container'>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Annie} alt="Fighter1" className='flip-image' />
          </div>
          <div className="flip-card-back">
            <h1>Fighter1</h1>
            <p>Universe name</p>
            <p>Strength</p>
            <p>Agility</p>
            <p>Defense</p>
            <p>Willpower</p>
            <p>Chance</p>

          </div>
        </div>
      </div>

      
    
          <a href='#' className='vs-display'>vs</a>
      
      




      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Toe} alt="Fighter2" className='flip-image' />
          </div>
          <div className="flip-card-back">
            <h1>Fighter2</h1>
            <p>Universe name</p>
            <p>Strength</p>
            <p>Agility</p>
            <p>Defense</p>
            <p>Willpower</p>
            <p>Chance</p>
          </div>
        </div>
      </div>
    </container>
  )
}

export default Battle;

