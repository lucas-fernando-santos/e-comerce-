import React, { useState } from 'react'
import './style.css'
const categorias = [
    {
        id: 0,
        name: 'Todos'
    },
    {
        id: 1,
        name: 'Nike'
    },
    {
        id: 2,
        name: 'Puma'
    },
    {
        id: 3,
        name: 'Adidas'
    },
    {
        id: 4,
        name: 'Tesla'
    },
    {
        id: 5,
        name: 'LV'
    },
    {
        id: 6,
        name: 'New Balance'
    },
]
function CategoriesCarrosel() {
    const [selected, setSelected] = useState(0)

    return (
        <div>
            <div className="marcas">
                <div className="textMarcas">
                    <h2>categorias</h2>
                </div>
                <div className="containerElements">
                    {categorias.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setSelected(item.id)}
                            style={{ backgroundColor: selected == item.id ? 'black' : 'white', color: selected == item.id ? 'white' : 'black' }}
                        >{item.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoriesCarrosel