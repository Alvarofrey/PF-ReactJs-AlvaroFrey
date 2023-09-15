
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] =useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        const collectionRef = collection(db, "items");
        const filteredCollectionRef = query(
          collectionRef,
          where("id", "==", itemId)
        );  
        getDocs(filteredCollectionRef)
      .then((querySnapshot) => {
        
        if (!querySnapshot.empty) {
         
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          const productAdapted = { id: doc.id, ...data };
         
          setTimeout(() => {
            setProduct(productAdapted);
            setLoading(false); 
          }, 1000); 
        } else {
          console.log("El producto no existe.");
          setProduct(null);
          setLoading(false); 
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

   return (
    <div>
      {loading ? (
        <p>
            Cargando...
        </p>
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <p>El producto no existe</p>
      )}
    </div>
  );
};
export default ItemDetailContainer