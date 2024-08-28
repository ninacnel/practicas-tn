import { useState } from 'react';
import PropTypes from 'prop-types';

const NewBeer = ({ onAddBeer }) => {
    const [beerName, setBeerName] = useState('');
    const [beerStyle, setBeerStyle] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBeer = {
            id: Date.now(), //  para generar id unico
            beerName,
            beerStyle,
            price: parseFloat(price),
            available,
        };
        onAddBeer(newBeer);
        setBeerName('');
        setBeerStyle('');
        setPrice('');
        setAvailable(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre de la cerveza:</label>
                <input 
                    type="text" 
                    value={beerName} 
                    onChange={(e) => setBeerName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Estilo de cerveza:</label>
                <input 
                    type="text" 
                    value={beerStyle} 
                    onChange={(e) => setBeerStyle(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Precio:</label>
                <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Disponible:</label>
                <input 
                    type="checkbox" 
                    checked={available} 
                    onChange={(e) => setAvailable(e.target.checked)} 
                />
            </div>
            <button type="submit">Agregar Cerveza</button>
        </form>
    );
}

NewBeer.propTypes = {
    onAddBeer: PropTypes.func.isRequired,
};

export default NewBeer;
