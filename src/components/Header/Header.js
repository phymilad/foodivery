import React from "react"
import "../../styles/header.scss"
import logo from "../../assets/images/res-logo.png"
export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div>others</div>
    </div>
  )
}
