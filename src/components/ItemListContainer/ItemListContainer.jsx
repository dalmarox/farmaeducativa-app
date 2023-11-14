import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true); 
    getProducts()
      .then((resp) => {
        
        if(category) {
        const productsFilter = resp.filter(product => product.category === category);
        setProducts(productsFilter);
        setIsLoading(false);
        
        } else {
          setProducts(resp);
        setIsLoading(false);
          
        }
 
      })
      .catch((error) => console.log(error));
  }, [category]); 


  return (
    <>
      <div> {greeting} </div>
      {}
      { isLoading ? <h2>Cargando productos ..</h2> : <ItemList products={products} /> }
    </>
  );

    return (
        <>
          <div className="container"> {greeting} </div>
          <div className="justify-content-center">
            <h1 className="justify-content-center">Farma-Educativa</h1>
            <img src="/vacunatorio/yo (2).jpg" alt="yo"/>
            <h2>Un servicio farmacéutico donde podrá reservar sus vacunas para aplicar en nuestra farmacia, organizar la toma de sus medicamentos mediante un pastillero virtual con alarma, etc.</h2>
          <div>
            <img src="/vacunatorio/medicine.gif" alt="gift"/>
          </div> 

          </div>
        
        </>
        
    )
}
