import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/home'
import Carrinho from './pages/Carrinho'
import Perfil from './pages/perfil'
const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/Carrinho'element={<Carrinho/>} />
        <Route path='/perfil'element={<Perfil/>} />
      </Routes>
    </Router>
 
    </>
  )
}


export default App