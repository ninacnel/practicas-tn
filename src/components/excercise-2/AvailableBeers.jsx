import PropTypes from 'prop-types';

const AvailableBeers = ({beers}) => {
    const availableBeers = beers.filter(beer => beer.available);

    return (
        <div>
            <h1>Cervezas Disponibles</h1>
            <ul>
                {availableBeers.map(beer => (
                    <li key={beer.id}>
                        <strong>{beer.beerName}</strong> ({beer.beerStyle})
                    </li>
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