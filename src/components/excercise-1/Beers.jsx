import PropTypes from 'prop-types';

const Beers = ({beers}) => {
    const exchangeRate = 350;

    const beersInARS = beers.map(beer => ({
        ...beer,
        priceInARS: beer.price * exchangeRate
    }));

    return (
        <div>
            <h1>Lista de Cervezas</h1>
            <ul>
                {beersInARS.map(beer => (
                    <li key={beer.id}>
                        <strong>{beer.beerName}</strong> ({beer.beerStyle}) - 
                        Precio: ${beer.priceInARS} ARS - 
                        {beer.available ? "Disponible" : "No Disponible"}
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