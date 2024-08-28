import { useState } from 'react'
import PropTypes from 'prop-types';
import "./BeerItem.css"

const BeerItem = ({ beerName, beerStyle, price, available }) => {
    const [isAvailable, setIsAvailable] = useState(available);

    const changeAvailable = () => {
        setIsAvailable(!isAvailable);
    }

    return (
        <div className="beer-item-container">
            <h2>Nombre: {beerName}</h2>
            <p>Estilo: {beerStyle}</p>
            <p>Precio: {price}</p>
            <p>Disponible: {isAvailable ? "Si" : "No"}</p>
            <button type="button" className="btn btn-primary" onClick={changeAvailable}>Cambiar disponibilidad</button>
        </div>
    )
}

BeerItem.propTypes = {
    beerName: PropTypes.string,
    beerStyle: PropTypes.string, 
    price: PropTypes.number, 
    available: PropTypes.bool,
};

export default BeerItem