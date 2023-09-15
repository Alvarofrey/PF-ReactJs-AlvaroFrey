import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="ItemDetail">
      <form onSubmit={handleConfirm}>
        <div className="">
          <label
            className="form"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className=""
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </div>
        <div className="">
          <label
            className="form"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            className=""
            type="number"
            id="phone"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </div>
        <div className="form">
          <label
            className="form"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=""
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="email@gmail.com"
            required
          />
        </div>
        <div className="">
          <button
            className="ItemAgregarCarrito"
            type="submit"
          >
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;