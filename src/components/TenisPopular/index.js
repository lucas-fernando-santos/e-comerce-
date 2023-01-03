import React,{useEffect, useState} from 'react'
import './style.css'
import logonike from '../../assets/svgs/logonike.svg'
import logoAdidas from '../../assets/svgs/logoadidas.svg'
import logoPuma from '../../assets/svgs/logopuma.svg'
import tenisNike from '../../assets/imgs/PngItem_2898429.png'
import tenisAdidas from '../../assets/imgs/adidas.png'
import tenisPuma from '../../assets/imgs/pulma.png'
import carrinho from '../../assets/svgs/carrinho.svg'

const popularTenis = [
  {
    id: 1,
    tenis: tenisNike,
    logo: logonike,
    titulo: 'Nike Jordan Retro',
    descrição: 'ótimo para uma partida de basket',
  },
  {
    id: 2,
    tenis: tenisAdidas,
    logo: logoAdidas,
    titulo: 'Adidas Yeezy 500',
    descrição: 'ótimo para uma corrida com um tenis confortável',
  },
  {
    id: 3,
    tenis: tenisPuma,
    logo: logoPuma,
    titulo: 'Tênis Puma Smash V3 Bdp - Unissex',
    descrição: 'Melhor opção de tenis casual'
  }
]

const TenisPopular = () =>{
  const [dados, setDados] = useState([
    
  ]);
  const selecionaObj = (item) => {
    setDados([...dados,item])
    salvarLocal([...dados,item])
  }
  useEffect(() => {
  }, [dados]);
  const salvarLocal = (data) => {
    localStorage.setItem('carrinho',JSON.stringify(data));
   
  }
  const clearLocal = () => {
    localStorage.clear('carrinho',JSON.stringify(dados));
  }
  const valorCarrinho = localStorage.getItem('carrinho');

  //tentando resolver isso
  return (
    <>
   
      <div className="ContainerTenisPopular">
        <div className="Logo"><h2>popular</h2></div>
        <div className="carrossel-tenispopular">
          <div className="conte">
            {popularTenis.map(item => (
              <div className='tenisItem'>
                <div className="mainTenis">
                  <img className='TenisPopular' src={item.tenis} />

                  <img className='TenisPopularLogo' src={item.logo} />

                </div>
                <div className="footerTenisPopular">
                  <div className="textFooterTenis">
                    <h2>{item.titulo}</h2>
                    <span>{item.descrição}</span>
                  </div>
                  <button onClick={()=> selecionaObj(item) }><img src={carrinho} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>  </div>
    </>
  )
}

export default TenisPopular