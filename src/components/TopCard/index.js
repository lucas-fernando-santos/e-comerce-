import React from 'react'
import tenis1 from '../../assets/imgs/PngItem_2898429.png'
import './style.css'

const TopCard = () => {
    return (
        <div className='topcard-container'>
            <div className="containerText">
                <span>Seus pes merecem esse conforto</span><br />
                <button className='topcard-button'><strong>Veja Mais</strong></button>
            </div>
            <img src={tenis1} className='containerTenis' />
        </div>
    )
}

export default TopCard