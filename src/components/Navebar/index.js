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
            <img className='imagemNav' src={homeIncon}/>
            </button>
            <button>
            <img className='imagemNav' src={carrinho}/>
            </button>
            <button id='perfil'>
            <img className='imagemNav'  src={perfil}/>
            </button>
        </div>
        </>
    );
}

export default Index;
