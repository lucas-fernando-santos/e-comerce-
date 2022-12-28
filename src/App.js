import React from 'react'
import './App.css'
import CategoriesCarrosel from './components/CategoriesCarrosel'
import TenisPopular from './components/TenisPopular'
import Home from './pages/home'

const App = () => {
  return (
    <>
    <Home/>
    <CategoriesCarrosel/>
    <TenisPopular/>
    </>
  )
}

export default App