import CartWidget from "../CartWidget/CartiWidget";
import { NavLink, Link } from "react-router-dom";
import "../Navbar/NavBar.css"

const NavBar =  ()    =>  {
return (
    <>
    <nav>
      <Link to="/">
        <div className="flexlogo">
        <img className='imglogo' src="https://i.ibb.co/xhvL2Q4/logo2.png"></img>
        </div>
        </Link>
        <div>
          <NavLink to={`/category/Jabones`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jabones</NavLink>
          <NavLink to={`/category/Desodorantes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Desodorantes</NavLink>
        </div>
        <CartWidget />
    </nav>
    </>
);
};
export default NavBar;