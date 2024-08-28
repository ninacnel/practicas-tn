import { useState } from 'react'
import { beers } from '../../data/Data';
import ChangeDollar from '../excercise-1/ChangeDollar';
import BeerItem from '../beerItem/BeerItem';
import CountBeer from '../excercise-3/CountBeer';
import BeerStyles from '../beerItem/BeerStyles';
import './Beers.css';

const Beers = () => {
    const [dollar, setDollar] = useState(500);
    const [changeDollar, setChangeDollar] = useState(false);

    const setDollarHandler = (dollarPriceNow) => {
        setDollar(dollarPriceNow);
    }

    const changeDollarHandler = () => {
        setChangeDollar((prevState)=>!prevState);
    }

    const beersFiltered = beers.filter((beer) => beer.available === true);

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={changeDollarHandler}>{changeDollar ? 'Esconder': 'Actualizar precio del dolar' }</button>
            {changeDollar && <ChangeDollar setDollarHandler={setDollarHandler} dollar={dollar}/>}
            <hr/>
            <h1>EJERCICIO 1</h1>
            <div className='beers'>
            {beers.map((beer) =>
                <BeerItem key={beer.id} id={beer.id} beerName={beer.beerName} beerStyle={beer.beerStyle} price={beer.price * dollar} available={beer.available} />
            )}
            </div>
            <hr />

            <h1>EJERCICIO 2</h1>
            <div className='beers'>
            {beersFiltered.map((beer) =>
                <BeerItem key={beer.id} id={beer.id} beerName={beer.beerName} beerStyle={beer.beerStyle} price={beer.price * dollar} available={beer.available} />

            )}
            </div>
            <hr />

            <h1>EJERCICIO 3</h1>
            <CountBeer beers={beers} />
            <hr />
            
            <h1>EJERCICIO 4</h1>
            <BeerStyles beers={beers}/>
            
        </div>
    )
}

export default Beers