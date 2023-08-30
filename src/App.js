import './App.css'
import NavBar from "./componentes/Navbar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route exact path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
     
    
    </div>
  )
  
}


export default App
