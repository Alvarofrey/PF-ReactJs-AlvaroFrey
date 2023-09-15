import "../ItemCount/ItemCount.css"
import { useState } from 'react';

const ItemCount =({stock,inicial,onAdd})=> {
    const [cantidad, setCantidad] = useState(inicial) 

    const incrementar = () => {
        if(cantidad <stock) {
            setCantidad(cantidad+1)
        }
    }

    const decrementar = () => {
        if(cantidad >1) {
            setCantidad(cantidad - 1)
        }
    };

    return(
        <div className="itemcount">
            <div >
                <button className="ItemRestar" onClick={decrementar}>-</button>
                <h4>{cantidad}</h4>
                <button className="ItemSumar" onClick={incrementar}>+</button>
            </div>
            <div>
                <button className="ItemAgregarCarrito" onClick={()=> {
                    if (stock) {
                        onAdd(cantidad);} }} disabled={!stock}>
                    Agregar al  Carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount