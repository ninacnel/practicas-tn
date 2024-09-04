import { useState } from 'react'
import ProductForm from './ProductForm';

const Products = () => {
    const [finalPrice, setFinalPrice] = useState(0);
  
    const handleCalculatePrice = (price) => {
      setFinalPrice(price);
    };
  
    return (
      <div>
        <ProductForm onCalculate={handleCalculatePrice} />
        <p>El valor final del producto es: {finalPrice}</p>
      </div>
    );
  };

export default Products