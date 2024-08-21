import PropTypes from 'prop-types';

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
                    <li key={beer.id}>
                        <strong>{beer.beerName}</strong> ({beer.beerStyle}) - 
                        Precio: ${beer.price}
                    </li>
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