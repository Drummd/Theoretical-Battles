import Button from 'react-bootstrap/Button';
//import './Battle.css'
import Annie from '../../assets/Anakin.jpg'
import Toe from '../../assets/Wolverine.jpg'
//<a href="#" onclick="someFunction(); return false;">LINK</a> 

import { useLocation } from 'react-router-dom';

//function Battle({data}) {}
function Battle() {

  const location = useLocation()
  const {winner} = location.state;
  console.log("winner",winner)



  return (
    <div className='grid-container'>
      <h2>The Winner Is:</h2>
      <div className="flip-card">
        
          <div className="flip-card-front">
        
            <h1>{winner.character}</h1>
            <img src={winner.image} height={500}/>
          </div>
          
        </div>
     

    </div>
  )
}

export default Battle;

