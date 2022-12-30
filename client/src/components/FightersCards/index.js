import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Universe.css';

function FighterCards({ fighters, updateState }) {
    console.log()
    // console.log(props);
    // const fighters = props?.fighters?.fighters || [];

    return (
        // fighters.fighters.map(
        <div>
            <h1>
                Select a fighter from the {fighters.name} universe.
            </h1>
            <Row xs={1} md={5} className="g-5">

                {fighters.fighters.map(fighter => {
                    return (
                        <div className="body-universe">
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={fighter.image} />
                                        <Card.Body>
                                            <Card.Title>{fighter.character}</Card.Title>
                                            <Card.Body>
                                                <ul>
                                                    <li>Strength:{fighter.strength} </li>
                                                    <li>Defense: {fighter.defense}</li>
                                                    <li>Agility:{fighter.agility} </li>
                                                    <li>Chance:{fighter.chance} </li>
                                                    <li>Willpower:{fighter.will} </li>

                                                </ul>
                                            </Card.Body>
                                            <Button onClick={() => updateState(fighter)} variant="danger">Fighter</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    );
                })}
            </Row>
        </div>
    );
}

export default FighterCards;