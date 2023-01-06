import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import notificação from '../../assets/notificationOff.svg'
import remove from '../../assets/svgs/lixo.svg'
import Navbar from '../../components/Navebar'
import './style.css'

const Index = () => {
    const [valor, setValor] = useState([...JSON.parse(localStorage.getItem('carrinho'))])
    const [preço, setPreço] = useState(0);


    const handleRemove = (index) => {
        const arr = valor
        delete arr[index]
        setValor(arr)
        console.log(index)
        carregarValor()
    }
    const carregarValor = () => {
        let price =0
        valor.forEach(element => {
            price+=element.price
        });
        setPreço(price)
    }
    useEffect(() => {
        carregarValor()
        
    }, []);

    return (
        <>
            <header>

                <div className='perfilInfo'>
                    <div className="perfil">
                        <img src="https://pm1.narvii.com/7705/a214b8b9d15953814a0b352791d60436a9ce7e9dr1-554-554v2_hq.jpg" />
                    </div>
                    <div className="infoPerfil">
                        <p><span>welcome</span></p>
                        <p><span><strong>Ednaldo Pereira</strong></span></p>
                    </div></div>
                <div className="notification">
                    <button><img src={notificação} /></button>
                </div>

            </header>
            <div className="container-Carrinho">

                <h1>Carrinho</h1>
                <ul>
                    {valor.map((item, index) => (
                        <div className="CarrinhoGeral">
                            <li>
                                <div className="tenis-carrinho">
                                    <img className='carrinho-img' src={item.tenis} />
                                    <div className="text-carrinho">
                                        <div>
                                            <span><strong>{item.titulo}</strong></span>
                                        </div>
                                        <div>
                                            <span><p><strong>valor:</strong></p><p>{item.price}R$</p></span>
                                        </div>
                                    </div>
                                    <button className='button-remove' onClick={() => handleRemove(index)}><img src={remove} /></button></div>
                            </li>
                        </div>
                    ))}
                </ul>
                <div className="finalizar-compra">
                    <div className="valor-total">
                        <span><strong>valor final  </strong>{preço}R$</span>
                    </div>
                    <div className="button-Comprar">
                        <button>Comprar</button>
                    </div>
                </div></div>
            <Navbar />
        </>
    );
}

export default Index;
/*

*/
