import React from "react"
import "../../styles/header.scss"
import logo from "../../assets/images/res-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"

const navLinks = [
  { display: "Home", path: "/home" },
  { display: "Foods", path: "/foods" },
  { display: "Cart", path: "/cart" },
  { display: "Contact", path: "/contact" },
]

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
        <h5>Foodivery</h5>
      </div>

      <div className="header__navigation">
        {navLinks.map((item, index) => {
          return (
            <NavLink className="menu" to={item.path} key={index}>
              {item.display}
            </NavLink>
          )
        })}
      </div>

      <div className="header__right">
        <span className="cart__icon">
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <span className="cart__badge">2</span>
        </span>
        <span className="user">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </span>
        <span className="mobile__menu">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </span>
      </div>
    </div>
  )
}
