import React, { usestate } from 'react'
import './style.css'
import tenis1 from '../../assets/imgs/PngItem_2898429.png'
import tenis2 from '../../assets/imgs/adidas.png'
import tenis3 from '../../assets/imgs/pulma.png'
import logoNike from '../../assets/svgs/logonike.svg'
import logoAdidas from '../../assets/svgs/logoadidas.svg'
import logopulma from '../../assets/svgs/logopuma.svg'

const tenisTop = [
    {
        id: '0',
        logo: logoNike,
        texto: 'Seus pes merecem esse conforto',
        tenis: tenis1,
    },
    {
        id: '1',
        logo: logoAdidas,
        texto: 'Seus pés merecem esse conforto',
        tenis: tenis2,
    },
    {
        id: '2',
        logo: logopulma,
        texto: 'Seus pés merecem esse conforto',
        tenis: tenis3,
    }
]
const TopCard = () => {
    return (
        <div className='container-carrossel'>

        <div className='contentCarrossel'>
            {
                tenisTop.map(item => (
                    <div className='topcard-container'>
                        <img className='logomarcas-topcard' src={item.logo} />
                        <div className="containerText">
                            <span>Seus pes merecem esse conforto</span><br />
                            <button className='topcard-button'><strong>Veja Mais</strong></button>
                        </div>
                        <img src={item.tenis} className='containerTenis' /></div>
                ))}</div>
                </div>
    )
}
/*   */
export default TopCard