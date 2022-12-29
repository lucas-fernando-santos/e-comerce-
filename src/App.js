import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/home'
const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/index'element={<Home/>} />
      </Routes>
    </Router>
 
    </>
  )
}


export default App