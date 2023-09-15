import cart from './assets/cart.svg'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Cart from "../Cart/Cart";
const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
  
    const mostrarOCultarCarrito = () => {
      setMostrarCarrito(!mostrarCarrito);
    };
  
    const handleCloseCart = () => {
      setMostrarCarrito(false);
    };
  
    return (
      <div className="relative">
        <button
          onClick={mostrarOCultarCarrito}
          className="ItemAgregarCarrito"
        >
          <img src={cart} alt="cart-widget" className="h-6 w-6 flex-shrink-0" />
          <span className="text-bold-24 text-white bg-blue-500 rounded-full p-1">
            {totalCantidad}
          </span>
        </button>
  
        {mostrarCarrito && (
          <div className="" onClick={handleCloseCart}></div>
        )}
  
        {mostrarCarrito && (
          <div className="fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg w-80 h-96 overflow-y-auto z-50">
            <Cart closeCart={handleCloseCart} />
          </div>
        )}
  
      </div>
    );
  };
  
  export default CartWidget;