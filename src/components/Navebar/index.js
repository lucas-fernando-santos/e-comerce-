import React,{useState} from 'react';
import './style.css'
import homeIncon from '../../assets/svgs/home.svg'
import carrinho from '../../assets/svgs/carrinhoPreto.svg'
import perfil from '../../assets/svgs/perfil.svg'
const Index = () => {
    const [text,setText] = useState('')
  const Home = () => {
    if (tamanhoDaJanela > 900) {
        return(<span>Home</span>)
    } 
    return(<div></div>)
  }
  const Perfil = () => {
    if (tamanhoDaJanela > 900) {
        return(<span>Perfil</span>)
    } 
    return(<div></div>)
  }
  const Carrinho = () => {
    if (tamanhoDaJanela > 900) {
        return(<span>Carrinho</span>)
    } 
    return(<div></div>)
  }
  const tamanhoDaJanela = window.innerWidth
  
    return (
        <>
        <div className="navbar">
            <button>
            <a href="/"><img className='imagemNav' src={homeIncon}/></a>
            {Home()}
            </button>
            <button>
           <a href="/carrinho"><img className='imagemNav' src={carrinho}/></a> 
           {Carrinho()}
            </button>
           <a href="/perfil"> <button id='perfil'>
            <img className='imagemNav'  src={perfil}/>
           {Perfil()}
            </button></a>
        </div>
        </>
    );
}

export default Index;
