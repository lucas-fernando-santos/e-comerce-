import React from 'react'
import './style.css'
import notificação from '../../assets/notificationOff.svg'
import TopCard from '../../components/TopCard'

const index = () => {
  return (
    <>
    <header>
      <div className='perfilInfo'>
        <div className="perfil">
            <img src="https://pm1.narvii.com/7705/a214b8b9d15953814a0b352791d60436a9ce7e9dr1-554-554v2_hq.jpg"/>
        </div>
        <div className="infoPerfil">
            <p><span>welcome</span></p>
            <p><span><strong>Ednaldo Pereira</strong></span></p>
        </div></div>
        <div className="notification">
            <button><img src={notificação}/></button>
        </div>
    </header>
    <main>
       <TopCard/>
    </main>
    </>
  )
}

export default index