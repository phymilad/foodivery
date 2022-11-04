import React from "react"
import "../../../styles/ProductCard.scss"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../../../store/shopping-cart/cartSlice.js"

export default function ProductCard(props) {
  const dispatch = useDispatch()

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(props))
  }

  console.log(props)

  return (
    <div className="productCard__container">
      <img scr={props.mainImg} alt={props.title} />
      <h5>{props.title}</h5>
      <div className="productCard__price-button-container">
        <p>{`${props.price}$`}</p>
        <button onClick={handleAddItemToCart}>Add to card</button>
      </div>
    </div>
  )
}
