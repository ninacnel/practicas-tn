import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Shark = ({ species, family, lifeExpectancy }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{species}</Card.Title>
        <Card.Text>
          <strong>Familia:</strong> {family}
        </Card.Text>
        <Card.Text>
          <strong>Expectativa de vida:</strong> {lifeExpectancy} años
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Shark.propTypes = {
  species: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  lifeExpectancy: PropTypes.number.isRequired,
};

export default Shark;