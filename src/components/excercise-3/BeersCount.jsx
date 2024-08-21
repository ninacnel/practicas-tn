import PropTypes from 'prop-types';

const BeersCount = ({ beers }) => {
    const redBeersCount = beers.filter(beer => beer.beerStyle === "Red").length;
    const ipaBeersCount = beers.filter(beer => beer.beerStyle === "IPA").length;

    return (
        <div>
            <h1>Conteo de Cervezas por Estilo</h1>
            <p>Cervezas estilo Red: {redBeersCount}</p>
            <p>Cervezas estilo IPA: {ipaBeersCount}</p>
        </div>
    );
}

BeersCount.propTypes = {
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

export default BeersCount;