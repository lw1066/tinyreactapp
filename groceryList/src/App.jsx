import { useState } from 'react'
import Header from './components/Header'
import ItemList from './components/ItemList'
import Recipe from './components/Recipe'
import AddItems from './components/AddItems'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='container'>
     <Header />
     <ItemList />
     <Recipe />
     <AddItems />
    </div>
  )
}

export default App
