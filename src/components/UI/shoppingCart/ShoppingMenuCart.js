import React from "react"
import "../../../styles/ShoppingMenuCart.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlusSquare,
  faMinusSquare,
  faRemove,
} from "@fortawesome/free-solid-svg-icons"
import {
  addItemToCart,
  decreaseItem,
  removeItem,
} from "../../../store/shopping-cart/cartSlice"
import { useDispatch } from "react-redux"

const ShoppingMenuCart = (props) => {
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(addItemToCart({ price: props.price, id: props.id }))
  }

  const handleDecrease = () => {
    dispatch(decreaseItem({ price: props.price, id: props.id }))
  }

  const handleRemove = () => {
    dispatch(removeItem({ id: props.id }))
  }

  return (
    <div className="shopping-menu-cart__container">
      <div className="shopping-menu-cart__info">
        <img src={props.mainImg} alt="Food image" />
        <div className="shopping-menu-cart__info-text-container">
          <h4>{props.title}</h4>
          <div className="shopping-menu-cart__info-number-price">
            <h5>{props.quantity}x</h5>
            <h5>{`${props.price * props.quantity}`}</h5>
          </div>
        </div>
      </div>
      <div className="shopping-menu-cart__buttons">
        <div>
          <FontAwesomeIcon
            icon={faPlusSquare}
            size="2x"
            onClick={handleIncrease}
          />
          <FontAwesomeIcon
            icon={faMinusSquare}
            size="2x"
            onClick={handleDecrease}
          />
        </div>
        <FontAwesomeIcon icon={faRemove} size="2x" onClick={handleRemove} />
        {/* <button>Delete</button> */}
      </div>
    </div>
  )
}

export default ShoppingMenuCart
