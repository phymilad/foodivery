import React from "react"
import "../../../styles/ProductCard.scss"

export default function ProductCard(props) {
  return (
    <div className="productCard__container">
      <img scr={props.mainImg} alt={props.title} />
      <h5>{props.title}</h5>
      <div className="productCard__price-button-container">
        <p>{`${props.price}$`}</p>
        <button>Add to card</button>
      </div>
    </div>
  )
}
