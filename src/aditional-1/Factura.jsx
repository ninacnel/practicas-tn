import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Factura = ({ name, type, price }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Factura.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Factura;
