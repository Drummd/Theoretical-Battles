import Button from 'react-bootstrap/Button';
import './Universe.css'

function UniverseCard({ title, description, image, updateState }) {
    return (
        <div className="card">
          <img className="card-img" src={image} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-texts">{description}</p>
            <div>
             <Button onClick={() => updateState(title)} variant="danger">Universe</Button>
            </div>

          </div>
        </div>
    );
}

export default UniverseCard;