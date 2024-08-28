import PropTypes from 'prop-types';

const BeerItem = ({beerName, beerStyle, beerPrice, available = null}) => {
  return (
    <div>
       <h4>{beerName}</h4>
       <h5>{beerStyle}</h5>
       <p>${beerPrice}</p>
       {available ? 'Disponible': 'No disponible'}
    </div>
  )
}

BeerItem.propTypes = {
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    beerPrice: PropTypes.number,
    available: PropTypes.bool,
}

export default BeerItem