import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/home'
import Carrinho from './pages/Carrinho'
const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/Carrinho'element={<Carrinho/>} />
      </Routes>
    </Router>
 
    </>
  )
}


export default App