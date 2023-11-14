import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ( {descripcion, price, stock, titulo, img} ) => {

  const onAdd = (items) => { 
    alert(`Se agregaron ${items} al carrito`)
 }

  return (
    <div className="border m-2">
        <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{titulo}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {descripcion} </p>
          <p className="card-text">{categoria}</p>
          <p>Cantidad: {stock} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}