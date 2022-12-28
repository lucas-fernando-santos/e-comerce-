import React from 'react'
import './style.css'
import logonike from '../../assets/svgs/logonike.svg'
import tenisNike from '../../assets/imgs/PngItem_2898429.png'
import carrinho from '../../assets/svgs/carrinho.svg'

const TenisPopular = () => {
  return (
    <>
    <div className="ContainerTenisPopular">
        <div className="Logo"><h2>popular</h2></div>
        <div className="conte">
            <div className="mainTenis">
                        <img  className='TenisPopular' src={tenisNike}/>
                    <div className="tenisNikeTenisPopular">
                        <img className='TenisPopularLogo' src={logonike}/>
                    </div></div>
                <div className="footerTenisPopular">
                    <div className="textFooterTenis">
                      <h2>Nike Jordan 4 Retro</h2>
                      <span>Otimo para uma bela partida de basket</span>
                    </div>
                    <button><img src={carrinho}/></button>
            </div>
    </div></div>
    </>
  )
}

export default TenisPopular