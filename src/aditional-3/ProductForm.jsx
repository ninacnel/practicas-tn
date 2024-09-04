import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container } from 'react-bootstrap';

const shippingOptions = {
  home: 1000,
  mail: 300,
  inPerson: 0
};

const ProductForm = ({ onCalculate }) => {
  const [productValue, setProductValue] = useState('');
  const [shippingMethod, setShippingMethod] = useState('inPerson');

  const handleProductValueChange = (e) => {
    setProductValue(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleCalculate = () => {
    const totalPrice = parseFloat(productValue) || 0;
    const shippingCost = shippingOptions[shippingMethod];
    onCalculate(totalPrice + shippingCost);
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formProductValue">
          <Form.Label>Valor del producto:</Form.Label>
          <Form.Control
            type="number"
            value={productValue}
            onChange={handleProductValueChange}
            placeholder="Ingrese el valor del producto"
          />
        </Form.Group>
        
        <Form.Group controlId="formShippingMethod">
          <Form.Label>Método de envío:</Form.Label>
          <Form.Control
            as="select"
            value={shippingMethod}
            onChange={handleShippingMethodChange}
          >
            <option value="home">Envío a la casa</option>
            <option value="mail">Retiro por correo</option>
            <option value="inPerson">Retiro presencial</option>
          </Form.Control>
        </Form.Group>
        
        <Button variant="primary" onClick={handleCalculate}>
          Calcular Precio Final
        </Button>
      </Form>
    </Container>
  );
};

ProductForm.propTypes = {
  onCalculate: PropTypes.func.isRequired,
};

export default ProductForm;