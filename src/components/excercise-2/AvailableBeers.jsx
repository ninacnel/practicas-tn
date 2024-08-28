import PropTypes from 'prop-types';
import BeerItem from '../beerItem/BeerItem';

const AvailableBeers = ({beers}) => {
    const availableBeers = beers.filter((beer) => beer.available);

    return (
        <div>
            <h1>Cervezas Disponibles</h1>
            <ul>
                {availableBeers
                .map((beer) => (
                    <BeerItem
                    key={beer.id}
                    beerName={beer.beerName}
                    beerStyle={beer.beerStyle}
                    beerPrice={beer.price}
                    available={beer.available}
                    />
                ))}
            </ul>
        </div>
    );
}

AvailableBeers.propTypes = {
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

export default AvailableBeers;