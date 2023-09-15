import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    //correo y contraseña definidos
    if (email === "alvarofrey@hotmail.com" && password === "alvarofrey") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="Items">
      <div className="">
        <h2 className="">Iniciar sesion</h2>
        <input
          type="email"
          placeholder="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=""
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=""
          required
        />
        <div className="">
          <p className="">
            Correo definido: alvarofrey@hotmail.com
          </p>
          <p className="">
            Contraseña definida: alvarofrey
          </p>
        </div>
        <button
          onClick={handleLogin}
          className="iniciarsesion"
        >
          Iniciar sesión
        </button>
        <button className="ItemSumar">
          <Link className="irinicio" to="/">Ir al Inicio</Link>
        </button>
        {isLoggedIn && (
          <Link to="/checkout">
            <button className="ItemAgregarCarrito">
              Ir al Checkout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Login;