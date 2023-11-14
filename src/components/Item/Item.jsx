import { Link } from "react-router-dom";

export const Item = ({ id, titulo, img, descripcion, categoria}) => {
  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{titulo}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {descripcion} </p>
          <p className="card-text">{categoria}</p>
        
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline-success">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};