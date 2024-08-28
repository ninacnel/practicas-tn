import { useState } from 'react'
import ChangeDollar from '../excercise-1/ChangeDollar';
import BeerItem from '../beerItem/BeerItem';
import CountBeer from '../excercise-3/CountBeer';
import BeerStyles from '../beerItem/BeerStyles';
import './Beers.css';
import NewBeer from '../newBeer/NewBeer';
import { initialBeers } from '../../data/Data';

const Beers = () => {
    const [dollar, setDollar] = useState(500);
    const [changeDollar, setChangeDollar] = useState(false);
    const [beers, setBeers] = useState(initialBeers);

    const setDollarHandler = (dollarPriceNow) => {
        setDollar(dollarPriceNow);
    }

    const changeDollarHandler = () => {
        setChangeDollar((prevState) => !prevState);
    }

    const addBeerHandler = (newBeer) => {
        setBeers((prevBeers) => [...prevBeers, newBeer]);
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={changeDollarHandler}>
                {changeDollar ? 'Esconder' : 'Actualizar precio del dolar'}
            </button>
            {changeDollar && <ChangeDollar onDollarChange={setDollarHandler} dollar={dollar} />}
            <hr />
            <h1>EJERCICIO BEERS</h1>
            <div className='beers'>
                {beers.map((beer) =>
                    <BeerItem key={beer.id} id={beer.id} beerName={beer.beerName} beerStyle={beer.beerStyle} price={beer.price * dollar} available={beer.available} />
                )}
            </div>

            <h1>EJERCICIO COUNT</h1>
            <CountBeer beers={beers} />
            <hr />

            <h1>EJERCICIO STYLES</h1>
            <BeerStyles beers={beers} />

            <h1>EJERCICIO FORM</h1>
            <NewBeer onAddBeer={addBeerHandler} />
        </div>
    )
}

export default Beers