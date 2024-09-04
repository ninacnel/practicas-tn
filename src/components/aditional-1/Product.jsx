import PropTypes from 'prop-types';

const Product = ({ name }) => {
    return (
        <div>
            <p>Producto: {name}</p>
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string,
}

export default Product;