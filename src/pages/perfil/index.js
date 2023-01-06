import React from 'react'
import './style.css'
import Navbar from '../../components/Navebar'
export default function index() {
  return (
    <>
    <div className="containerPerfilgeral">
        <div className="connterPerfil">
            <img src="https://pm1.narvii.com/7705/a214b8b9d15953814a0b352791d60436a9ce7e9dr1-554-554v2_hq.jpg"/>
            <span>Ednaldo Pereira</span>
        </div> 
        <img className='fundo' src="https://img.freepik.com/premium-vector/random-geometric-shape-pattern-abstract-background-80s-90s-retro-style-colorful-geometrical-illustration_510351-12440.jpg?w=2000"/>
    <Navbar/>
    </div>
    </>
  )
}
