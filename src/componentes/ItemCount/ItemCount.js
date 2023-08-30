import "../ItemCount/ItemCount.css"
import { useState } from 'react';

const ItemCount =({stock,initial,onAdd})=> {
    const [quantity, setQuantity] = useState(initial) 

    const increment = () => {
        if(quantity <stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity >1) {
            setQuantity(quantity - 1)
        }
    }
    return(
        <div>
            <div >
                <button className="ItemRestar" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="ItemSumar" onClick={increment}>+</button>
            </div>
            <div>
                <button className="ItemAgregarCarrito" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al  Carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount