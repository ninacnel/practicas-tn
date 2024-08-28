import React from 'react'

const BeerStyles = ({ beers }) => {
    const beerStyles = [...new Set(beers.map(beer => beer.beerStyle))];

    return (
        <div>
            <h3>Estilos de cervezas disponibles:</h3>
            <ul>
                {beerStyles.map((style, i) => (
                    <li key={i}>{style}</li>
                ))}
            </ul>
        </div>
    )
}

export default BeerStyles