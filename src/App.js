import './App.css'
import NavBar from "./componentes/Navbar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart'
import Checkout from "./componentes/Checkout/Checkout";
import OrderPage from "./componentes/OrderPage/OrderPage";
import Login from "./componentes/Login/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
       <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/:orderId" element={<OrderPage />} />
            <Route path="/login" element={<Login />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
     
    
    </div>
  )
  
}


export default App
