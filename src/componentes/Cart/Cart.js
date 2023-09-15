import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = ({ closeCart }) => {
  const { cart, limpiarCart, totalCantidad, total } = useContext(CartContext);
  if (totalCantidad === 0) {
    return (
      <div className="">
        <h1 className="">
          No hay productos en el Carrito de Compras
        </h1>
      </div>
    );
  }

  const handleValidarCompra = () => {
    closeCart(); 
  };

  return (
    <div className="">
      <div className="">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
      </div>
      <div className="">
        <div className="Items">
        {total !== undefined && (
  <h3 className="">Total: ${total.toFixed(2)}</h3>
)}
          <button
            onClick={() => limpiarCart()}
            className="ItemAgregarCarrito"
          >
            Limpiar Carrito
          </button>
          <Link to="/login">
            {" "}
            <button
              onClick={handleValidarCompra}
              className="ItemAgregarCarrito"
            >Validar Compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;