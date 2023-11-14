import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <Link to={"/"}>
        <h4>Vacunas</h4>
      </Link>
      <div>
        <Link to={"/"}>
          <button className="btn btn-outline-dark mx-2">Home</button>
        </Link>
        <Link to={"/category/Vacunas Niños"}>
          <button className="btn btn-outline-dark mx-2">Vacunas Niños</button>
        </Link>
        <Link to={"/category/vacunas Adultos"}>
          <button className="btn btn-outline-dark mx-2">Vacunas Adultos</button>
      </Link>
    </div>
    <CartWidget />
    </nav>
  );
};
