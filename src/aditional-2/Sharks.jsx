import { useState } from 'react';
import Shark from './Shark';
import { Form, Container } from 'react-bootstrap';
import { sharks } from '../data/Data';

const Sharks = () => {
  const [filter, setFilter] = useState(0);

  const filteredSharks = sharks.filter((shark) => 
    shark.lifeExpectancy >= (filter || 0)
  );

  return (
    <Container>
      <Form.Group controlId="lifeExpectancyFilter" className="my-3">
        <Form.Label>Filtrar por expectativa de vida mínima:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingresar años"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Form.Group>
      {filteredSharks.map((shark) => (
        <Shark
          key={shark.id}
          species={shark.species}
          family={shark.family}
          lifeExpectancy={shark.lifeExpectancy}
        />
      ))}
    </Container>
  );
};

export default Sharks;