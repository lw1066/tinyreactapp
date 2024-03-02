import { useState } from 'react'
import Header from './components/Header'
import ItemList from './components/ItemList'

import AddItems from './components/AddItems'
import './App.css'



function App() {
 
  return (
    <div id='container'>
     <Header />
     <ItemList />
     
    </div>
  )
}

export default App
