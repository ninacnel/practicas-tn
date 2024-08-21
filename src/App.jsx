import './App.css'
import Products from './components/aditional-1/Products'
import Persons from './components/aditional-2/Persons'
import Family from './components/aditional-3/Family'
import Beers from './components/excercise-1/Beers'
import AvailableBeers from './components/excercise-2/AvailableBeers'
import BeersCount from './components/excercise-3/BeersCount'
import BeersStyles from './components/excercise-4/BeersStyles'
import { beers, names, persons, products } from './data/data'

function App() {
  // intentar dejar vacio App

  return (
    <>
      <h2>Practica 1.2</h2>
      <Beers beers={beers}/>
      <AvailableBeers beers={beers}/>
      <BeersCount beers={beers}/>
      <BeersStyles beers={beers}/>
      <h2>Adicional</h2>
      <Products products={products}/>
      <Persons names={names}/>
      <Family persons={persons} />
    </>
  )
}

export default App
