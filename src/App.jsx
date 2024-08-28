import './App.css'
import Products from './components/aditional-1/Products'
import Persons from './components/aditional-2/Persons'
import Family from './components/aditional-3/Family'
import Divider from './components/divider/Divider'
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
      <Divider/>
      <AvailableBeers beers={beers}/>
      <Divider/>
      <BeersCount beers={beers}/>
      <Divider/>
      <BeersStyles beers={beers}/>
      <Divider/>
      <h2>Adicional</h2>
      <Products products={products}/>
      <Divider/>
      <Persons names={names}/>
      <Divider/>
      <Family persons={persons} />
    </>
  )
}

export default App
