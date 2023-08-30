import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ( {greeting}) =>    {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            let response;
            if (categoryId) {
              response = await getProductsByCategory(categoryId);
              setProducts(response);
            } else {
              response = await getProducts();
            }
            setProducts(response);
          } catch (error) {
            console.log("Error fetching products:", error);
          }
        };
    
        fetchProducts();
      }, [categoryId]);
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList key={products.id} products={products}/>
        </div>
    );
};
export default ItemListContainer;