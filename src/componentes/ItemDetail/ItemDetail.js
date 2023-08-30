import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id,name,img,category,description,price,stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada',quantity)}/>
            </footer>
        </article>
    );
};
export default ItemDetail;