import React from "react"
import "../../../styles/ShoppingMenu.scss"
import { useDispatch, useSelector } from "react-redux"
import { showShoppingCart } from "../../../store/shopping-cart/cartSlice"
import ShoppingMenuCart from "./ShoppingMenuCart"
// import { mainImg } from "../../../assets/images/produc_01.3.jpg"

const ShoppingMenu = () => {
  const dispatch = useDispatch()
  const shoppingItems = useSelector((state) => {
    console.log(state.cart)
    return state.cart.cartItems
  })
  console.log(shoppingItems)
  const handleCloseShopMenu = () => {
    dispatch(showShoppingCart(false))
  }

  return (
    <div className="shopping-menu__container" onClick={handleCloseShopMenu}>
      <div className="shopping-menu__main" onClick={(e) => e.stopPropagation()}>
        <div className="shopping-menu__close">
          <button>Close</button>
        </div>
        <div className="shopping-menu__carts">
          {shoppingItems.map((item, index) => {
            console.log(item)
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
        <div className="shopping-menu__total">this is total part</div>
      </div>
    </div>
  )
}

export default ShoppingMenu
