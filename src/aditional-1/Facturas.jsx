import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Factura from './Factura';
import { facturas } from '../data/Data';

const Facturas = () => {
  const [filteredFacturas, setFilteredFacturas] = useState(facturas);

  const filterDulces = () => {
    const dulces = facturas.filter((factura) => factura.type === 'dulce');
    setFilteredFacturas(dulces);
  };

  return (
    <div>
      <Button variant="primary" onClick={filterDulces}>Mostrar Dulces</Button>
      <Row>
        {filteredFacturas.map((f) => (
          <Col key={f.id}>
            <Factura 
              name={f.name}
              type={f.type}
              price={f.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Facturas;