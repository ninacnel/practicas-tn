import PropTypes from 'prop-types';

const BeerStyles = ({ beers }) => {
    const beerStyles = [...new Set(beers.map((beer) => beer.beerStyle))];

    return (
        <div>
            <h3>Estilos de cervezas disponibles:</h3>
            <ul>
                {beerStyles.map((style, i) => (
                    <li key={i}>{style}</li>
                ))}
            </ul>
        </div>
    );
}

BeerStyles.propTypes = {
    beers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            beerName: PropTypes.string.isRequired,
            beerStyle: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            available: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default BeerStyles;
