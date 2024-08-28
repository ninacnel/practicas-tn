import PropTypes from 'prop-types';

const CountBeer = ({ beers }) => {
    const countRed = beers.filter((beer) => beer.beerStyle === "Red").length;
    const countIpa = beers.filter((beer) => beer.beerStyle === "IPA").length;

    return (
        <div>
            <h2>Cantidad de cervezas rojas: {countRed}</h2>
            <h2>Cantidad de cervezas IPA: {countIpa}</h2>
        </div>
    )
}

CountBeer.propTypes = {
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

export default CountBeer