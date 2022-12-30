import Button from 'react-bootstrap/Button';
import './Universe.css'

function UniverseCard({ title, description, image, updateState }) {
    return (
        <div class="card">
          <img class="card-img" src={image} alt="Card" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-texts">{description}</p>
            <div>
             <Button onClick={() => updateState(title)} variant="danger">Universe</Button>
            </div>

          </div>
        </div>
    );
}

export default UniverseCard;