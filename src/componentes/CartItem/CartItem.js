import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = (p) => {
  const { eliminarItem } = useContext(CartContext);

  return (
    <div className="">
      <div className="Items">
        <h2 className="">{p.name}</h2>
        <section className="">
          <p className="canpresub">Cantidad: {p.cantidad}</p>
          <p className="canpresub">
            Precio x Unidad: ${p.price}
          </p>
          <p className="canpresub">Subtotal: ${p.price * p.cantidad}</p>
        </section>
        <button
          onClick={() => eliminarItem(p.id)}
          className="ItemAgregarCarrito"
        >
          Eliminar Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;