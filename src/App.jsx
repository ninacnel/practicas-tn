import './App.css'
import Beers from './components/excercise-1/Beers'
import { beers } from './data/beers'
import AvailableBeers from './components/excercise-2/AvailableBeers'
import BeersCount from './components/excercise-3/BeersCount'
import BeersStyles from './components/excercise-4/BeersStyles'

function App() {
  // intentar dejar vacio App

  return (
    <>
      <div>Practica 1.2</div>
      <Beers beers={beers}/>
      <AvailableBeers beers={beers}/>
      <BeersCount beers={beers}/>
      <BeersStyles beers={beers}/>
    </>
  )
}

export default App
