import React from "react"
import "../../../styles/ProductCard.scss"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../../../store/shopping-cart/cartSlice.js"
import { useNavigate } from "react-router-dom"

export default function ProductCard(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddItemToCart = (e) => {
    e.stopPropagation()
    dispatch(addItemToCart(props))
  }

  const handleGoToDetail = () => {
    navigate(`/food/${props.id}`)
  }

  return (
    <div className="productCard__container">
      <img scr={props.mainImg} alt={props.title} onClick={handleGoToDetail} />
      <h5 onClick={handleGoToDetail}>{props.title}</h5>
      <div className="productCard__price-button-container">
        <p>{`${props.price}$`}</p>
        <button className="button_link" onClick={handleAddItemToCart}>
          Add to card
        </button>
      </div>
    </div>
  )
}
