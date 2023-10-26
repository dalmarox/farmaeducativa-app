
import {CartWidget}from "../CartWidget/CartWidget";

export const NavBar = ()=> {
    return (
     <nav className="d-flex justify-content-around">
      
      <div>
        <div className="btn">
        <button className="btn btn-primary mx-2">Home</button>
        <button className= "btn btn-primary mx-2">Vacunas</button>
        <button className="btn btn-primary mx-2">Pastillero</button>
        <button className="btn btn-primary mx-2">Regístrese</button>
        </div>
      </div>
      <div className="x-smaller d-flex p-0">
          <CartWidget/>
          <p>Carrito</p>
          
          
    

          
        </div>
    </nav>
    );
};