import cart from './assets/cart.svg'

const CartWidget = () =>    {
    return (
        <div className='flexcarrito'>
            <button className='carritoboton'>
            <img className='imgcarrito' src={cart} alt="cart-widget" />
            <span>1</span>
            </button>
            
        </div>
    )
}
export default CartWidget