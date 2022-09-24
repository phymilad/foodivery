import React, { useState, useRef } from "react"
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
  const showMobileMenuRef = useRef(null)

  const toggleMobileMenu = () => {
    console.log("11111")
    showMobileMenuRef.current.classList.toggle("show__menu")
  }

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" className="logo__image" />
        <h5>Foodivery</h5>
      </div>

      <div ref={showMobileMenuRef} className="header__navigation show__menu">
        <div className="header__navigation-menu">
          {navLinks.map((item, index) => {
            return (
              <NavLink
                onClick={toggleMobileMenu}
                className={(navclass) =>
                  navclass.isActive ? "active__menu" : ""
                }
                to={item.path}
                key={index}
              >
                {item.display}
              </NavLink>
            )
          })}
        </div>
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
        <span className="mobile__menu" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </span>
      </div>
    </header>
  )
}
