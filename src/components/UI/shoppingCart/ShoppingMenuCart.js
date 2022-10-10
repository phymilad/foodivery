import React from "react"
import "../../../styles/ShoppingMenuCart.scss"

const ShoppingMenuCart = (props) => {
  return (
    <div className="shopping-menu-cart__container">
      <div className="shopping-menu-cart__info">
        <img src={props.mainImg} alt="Food image" />
        <div className="shopping-menu-cart__info-text-container">
          <h4>{props.title}</h4>
          <div className="shopping-menu-cart__info-number-price">
            <h5>{props.quantity}x</h5>
            <h5>$175</h5>
          </div>
        </div>
      </div>
      <div className="shopping-menu-cart__buttons">
        <div>increase/decrease</div>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default ShoppingMenuCart
