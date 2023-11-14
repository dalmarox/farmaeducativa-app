import { Button } from "../Button/Button"

export const Card = ({titulo, message}) => {
  return (
    <div className="card w-25 p-1">
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      
      <p className="card-text">{message}</p>
      <Button text="Details" variantCss={"blueviolet"} />
    </div>
  </div>
  )
}

