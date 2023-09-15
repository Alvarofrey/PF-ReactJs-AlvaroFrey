import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import deleted from "../CartWidget/assets/ordenDeleted.png";

const OrderPage = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [orderDeleted, setOrderDeleted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [total, setTotal] = useState(0);

  const handleEliminarOrden = (orderId) => {
    if (window.confirm("¿Estás seguro que deseas eliminar esta orden?")) {
      const orderRef = doc(db, "orders", orderId);

      deleteDoc(orderRef)
        .then(() => {
          console.log("Orden eliminada correctamente.");
          
          setOrderDeleted(true);
          setConfirmationMessage("La orden ha sido eliminada correctamente.");
          
          setOrderData({});
        })
        .catch((error) => {
          console.error("Error al eliminar la orden:", error);
        });
    }
  };

  useEffect(() => {
    const orderRef = doc(db, "orders", orderId);

    getDoc(orderRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setOrderData(data);
          const totalOrden = data.items.reduce(
            (acc, product) => acc + product.price * product.cantidad,
            0
          );
          setTotal(totalOrden);
        } else {
          console.log("La orden no existe.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener la orden:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  if (orderDeleted) {
    return (
      <div className="">
        <h1 className="t">
          {confirmationMessage}
          <img
            src={deleted}
            alt="eliminar"
            className=""
          />
        </h1>
        <button className="">
          <Link to="/">Regresar al Inicio</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="">
      <div className=" ">
        {loading ? (
          <p className="">
            Cargando detalles de la orden...
          </p>
        ) : !orderData ? (
          <p className="">La orden no existe.</p>
        ) : (
          <div className="orden">
            <h2 className="">
              Detalles de la Orden:{" "}
              <p className="">{orderId}</p>
            </h2>
            {orderData.user ? (
              <div>
                {/* EN ESTA SECCIÓN MOSTRAREMOS LOS DETALLES DE LA ORDEN */}
                <p>
                  <span className="">Nombre:</span>{" "}
                  {orderData.user.name || "No disponible"}
                </p>
                <p>
                  <span className="">Teléfono:</span>{" "}
                  {orderData.user.phone || "No disponible"}
                </p>
                <p>
                  <span className="">Email:</span>{" "}
                  {orderData.user.email || "No disponible"}
                </p>
                <h3 className="">
                  Detalles del Producto:
                </h3>
                {orderData.items.map((product, index) => (
                  <div key={index}>
                    <p>
                      <span className="">
                        Nombre del Producto:
                      </span>{" "}
                      {product.name || "No disponible"}
                    </p>
                    <p>
                      <span className="">Cantidad:</span>{" "}
                      {product.cantidad || "No disponible"}
                    </p>
                    <p>
                      <span className="">Precio:</span> $
                      {product.price || "No disponible"}
                    </p>
                    {index < orderData.items.length - 1 && (
                      <hr className="" />
                    )}
                  </div>
                ))}
                <div className="">
                  <h3 className="">
                    Total: ${total.toFixed(2)}
                  </h3>
                </div>
              </div>
            ) : (
              <p className="">Datos del usuario no disponibles.</p>
            )}
          </div>
        )}
      </div>
      <div className="">
        <button className="Regresar">
          <Link className="irinicio" to="/">Regresar al Inicio </Link>
        </button>
        <button
          onClick={() => handleEliminarOrden(orderId)}
          className="iniciarsesion"
        >
          Eliminar Orden
        </button>
      </div>
    </div>
  );
};

export default OrderPage;