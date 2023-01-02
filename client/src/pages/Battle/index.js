import { useLocation } from 'react-router-dom'

function Battle() {
  const location = useLocation()
  const { winner } = location.state
  console.log('winner', winner)

  return (
    <>
    <h2 className=''>The Winner Is:</h2>
    <div className="grid-container">
   
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={winner.image} alt="winner" className="flip-image" />
          </div>
          <div className="flip-card-back">
            <h1>{winner.character}</h1>
            <h2>{winner.name}</h2>
            <p>Strength: {winner.strength}</p>
            <p>Defense: {winner.defense}</p>
            <p>Agility: {winner.agility}</p>
            <p>Chance: {winner.chance}</p>
            <p>Willpower: {winner.will}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Battle
