import React from "react";
import {Link} from "react-router-dom";
import "../Item/Item.css"

const Item = ({id,name,img,price,stock}) => {

    return (
        <div className="Items">
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
            <p>
                Precio: ${price}
            </p>
            <p>
                Stock disponible:{stock}
            </p>

            </section>
            <footer>
                <Link className="LinkItem" to={`/item/${id}`}>Ver Detalle</Link>
            </footer>
        </article>
        </div>
    );
};
export default Item;