import PropTypes from 'prop-types';
import BeerItem from '../beerItem/BeerItem';

// recordar destructurar 
const Beers = ({beers}) => {
    const exchangeRate = 1200;

    const beersInARS = beers.map((beer) => ({
        ...beer,
        price: beer.price * exchangeRate
    }));

    return (
        <div>
            <h1>Lista de Cervezas</h1>
            <ul>
                {beersInARS.map((beer) => (
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

Beers.propTypes = {
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

export default Beers;