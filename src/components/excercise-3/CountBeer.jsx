import React from 'react'

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

export default CountBeer