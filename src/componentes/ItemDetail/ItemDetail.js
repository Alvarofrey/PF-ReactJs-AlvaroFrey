import "../ItemDetail/ItemDetail.css"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id,name,img,category,description,price,stock}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const { agregarItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad);
        
        const item = {
            id, name, price
        };

        agregarItem(item, cantidad);
    }

    return (
        <article className="ItemDetail">
            <header>
                <h2>
                    {name}
                </h2>
                <p>
                    Categoria: {category}
                </p>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                {cantidadAgregada  > 0 ?(
                    <Link className="terminarcompra" to='/'>Terminar Compra</Link>
                ) : (
                    <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
                )
}
                
            </footer>
        </article>
    );
};
export default ItemDetail;