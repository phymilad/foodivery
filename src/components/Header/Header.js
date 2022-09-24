import React from "react"
import "../../styles/header.scss"
import logo from "../../assets/images/res-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons"
import { NavLink, Link } from "react-router-dom"

const navLinks = [
  { display: "Home", path: "/home" },
  { display: "Foods", path: "/allfoods" },
  { display: "Cart", path: "/cart" },
  { display: "Contact", path: "/contact" },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        {/* <NavLink to="/home" className="header__logo-navigation"> */}
        <img src={logo} alt="logo" className="logo__image" />
        <h5>Foodivery</h5>
        {/* </NavLink> */}
      </div>

      <div className="header__navigation mobile__navigation-background mobile__navigation-menu">
        {navLinks.map((item, index) => {
          return (
            <NavLink
              className={(navclass) =>
                navclass.isActive ? "active__menu menu" : "menu"
              }
              to={item.path}
              key={index}
            >
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
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </Link>
        </span>
        <span className="mobile__menu">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </span>
      </div>
    </header>
  )
}
