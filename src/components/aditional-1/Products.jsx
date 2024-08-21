import Product from './Product';
import PropTypes from 'prop-types';

const Products = ({ products }) => {
    return (
        <div>
            {products.map((product, index) => (
                <Product key={index} name={product} />
            ))}
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Products;