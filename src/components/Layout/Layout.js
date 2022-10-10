import React from "react"
import Routers from "../../routes/Routers"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "../../styles/Layout.scss"
import { useSelector } from "react-redux"
import ShoppingMenu from "../UI/shoppingCart/ShoppingMenu"

export default function Layout() {
  const showShoppingMenu = useSelector((state) => state.cart.showShoppingCart)

  return (
    <div className="layout__container">
      <Header />
      {showShoppingMenu && <ShoppingMenu />}
      <div className="layout__container-main">
        <Routers />
      </div>
      <Footer />
    </div>
  )
}
