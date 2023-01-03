import React from 'react';
import './style.css'
import homeIncon from '../../assets/svgs/home.svg'
import carrinho from '../../assets/svgs/carrinhoPreto.svg'
import perfil from '../../assets/svgs/perfil.svg'
const Index = () => {
    return (
        <>
        <div className="navbar">
            <button>
            <a href="/"><img className='imagemNav' src={homeIncon}/></a>
            </button>
            <button>
           <a href="/carrinho"><img className='imagemNav' src={carrinho}/></a> 
            </button>
            <button id='perfil'>
            <img className='imagemNav'  src={perfil}/>
            </button>
        </div>
        </>
    );
}

export default Index;
