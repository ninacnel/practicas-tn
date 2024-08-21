import PropTypes from 'prop-types';

const BeersStyles = ({ beers }) => {
    // el Set es una coleccion propia de JS que nos evita elementos duplicados
    // como crea un objeto usamos spread para distribuir cada elem unico en un arreglo
    const beerStyles = [...new Set(beers.map((beer) => beer.beerStyle))];

    return (
        <div>
            <h1>Estilos de Cerveza Disponibles</h1>
            <ul>
                {beerStyles.map((style, index) => (
                    <li key={index}>{style}</li>
                ))}
            </ul>
        </div>
    );
}

BeersStyles.propTypes = {
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

export default BeersStyles;