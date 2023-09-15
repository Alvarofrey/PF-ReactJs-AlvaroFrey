import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  documentId,
  getDocs,
  query,
  writeBatch,
  where,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../ChekoutForm/CheckoutForm";
import cargandoOrden from "../CartWidget/assets/cargandoOrden.gif";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, total, limpiarCart } = useContext(CartContext);

  const crearOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrden = {
        user: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;
      let productosFueraDeStock = false;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodCantidad = productAddedToCart?.cantidad;

        if (stockDb >= prodCantidad) {
          batch.update(doc.ref, { stock: stockDb - prodCantidad });
        } else {
          productosFueraDeStock.push({ id: doc.id, ...dataDoc });
          productosFueraDeStock = true;
        }
      });

      if (productosFueraDeStock) {
        console.error("productos fuera de stock");
      } else {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAgregar = await addDoc(orderRef, objOrden);
        setOrderId(orderAgregar.id);
        limpiarCart();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="">
        <h1 className="">
          Espere, estamos procesando su orden
        </h1>
        <img
          src={cargandoOrden}
          alt="cargandoOrden"
          className=""
        />
      </div>
    );
  }
  if (orderId) {
    return (
      <div className="orden">
        <div className="">
          <h1 className="t">
            El ID de su orden es:{" "}
            <p className="">{orderId}</p>
          </h1>
          <div className="">
            <button className="irinicio">
              <Link  to={`/order/${orderId}`} className="irinicio">
                Revisar Orden
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="">Ingrese su datos de Contacto</h1>
      <CheckoutForm onConfirm={crearOrder} />
    </div>
  );
};

export default Checkout;