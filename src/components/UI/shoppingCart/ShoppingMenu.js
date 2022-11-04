import React from "react"
import "../../../styles/ShoppingMenu.scss"
import { useDispatch, useSelector } from "react-redux"
import { showShoppingCart } from "../../../store/shopping-cart/cartSlice"
import ShoppingMenuCart from "./ShoppingMenuCart"

const ShoppingMenu = () => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => {
    return state.cart
  })
  const handleCloseShopMenu = () => {
    dispatch(showShoppingCart(false))
  }

  const handleShoppingMenuClose = () => {
    dispatch(showShoppingCart(false))
  }

  const handleCheckout = () => {
    console.log("checkout clicked")
  }

  return (
    <div className="shopping-menu__container" onClick={handleCloseShopMenu}>
      <div className="shopping-menu__main" onClick={(e) => e.stopPropagation()}>
        <div className="shopping-menu__close">
          <button onClick={handleShoppingMenuClose}>Close</button>
        </div>
        <div className="shopping-menu__carts">
          {cartState.cartItems.map((item, index) => {
            return (
              <ShoppingMenuCart
                key={index}
                id={item.id}
                mainImg={item.mainImg}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            )
          })}
        </div>
        <div className="shopping-menu__total">
          <p>
            Total: <strong>{cartState.totalAmount}$</strong>
          </p>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingMenu
