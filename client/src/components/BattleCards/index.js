import './Battle.css'
import Battle from '../../pages/Battle'
import { useNavigate } from 'react-router-dom'



function BattleCards({ fighter1, fighter2 }) {


    const navigate = useNavigate();


    const handleClick = () => {
      if (fighter1.strength > fighter2.strength) {
      
        navigate("/battle", {state: {winner: fighter1}})
      } else {   
        navigate("/battle", {state: {winner: fighter2}})
      }
    }


    return (
        <div className='grid-container'>

        
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={fighter1.image} alt="Fighter1" className='flip-image' />

                    </div>
                    <div className="flip-card-back"  >
                        <h1>{fighter1.character}</h1>
                        <h2>{fighter1.name}</h2>
                        <p>Strength: {fighter1.strength}</p>
                        <p>Defense: {fighter1.defense}</p>
                        <p>Agility: {fighter1.agility}</p>
                        <p>Chance: {fighter1.chance}</p>
                        <p>Willpower: {fighter1.will}</p>


                    </div>
                </div>
            </div>

            <button onClick={handleClick} className='vs-display'>vs</button>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">

                        <img src={fighter2.image} alt="Fighter2" className='flip-image' />

                    </div>
                    <div className="flip-card-back" >
                        <h1>{fighter2.character}</h1>
                        <p>{fighter2.name}</p>
                        <p>Strength: {fighter2.strength}</p>
                        <p>Defense: {fighter2.defense}</p>
                        <p>Agility: {fighter2.agility}</p>
                        <p>Chance: {fighter2.chance}</p>
                        <p>Willpower: {fighter2.will}</p>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default BattleCards;

//const survivor = null;
        // let randomNumber = Math.random();
        // let winner;
        // if (randomNumber < 0.5) {
        //     winner = fighter1 
        //     return (
        //         <h1>{fighter1.character} is the winner!</h1>
        //     )
            

        // } else {
        //     winner = fighter2
        //     return (
        //         <h1>{fighter2.character} is the winner!</h1>
        //     );
        // }

        // // Check if dataSet1 has higher overall strength, defense, agility, chance and willpower than dataSet2
        // // if (fighter1.strength > fighter2.strength &&
        // //     fighter1.defense > fighter2.defense &&
        // //     fighter1.agility > fighter2.agility &&
        // //     fighter1.chance > fighter2.chance &&
        // //     fighter1.will > fighter2.will) {
        // // if (fighter1 >= fighter2) {

        // //     // let survivor = fighter1;
            

        // //     // } else {
        // //     //     survivor = fighter2;


        // //     //     return (
        // //     //         <h1>{fighter2.character} is the winner!</h1>
        // //     //     )
        // // };
// function onClick(e) {
    //     e.preventDefault()
    //     determineWinner()
    //     return (
    //         <h1>{fighter.character} is the winner!</h1>
    //     )
    // }/