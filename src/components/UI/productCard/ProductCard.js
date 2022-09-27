import React from "react"
import "../../../styles/ProductCard.scss"

export default function ProductCard(props) {
  console.log(props)
  return <div className="productCard__container">{props.title}</div>
}
