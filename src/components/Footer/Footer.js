import React from "react"
import "../../styles/Footer.scss"
import logo from "../../assets/images/res-logo.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__logo">
        <img src={logo} alt="Foodivery logo" />
        <h5>Foodivery</h5>
      </div>
      <div className="footer__schedule">
        <h3>Delivery Time</h3>
        <h5>Sunday - Thursday</h5>
        <p>11:00 am - 11:00 pm</p>
        <h5>Friday - Saturday</h5>
        <p>Off days</p>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <h5>Phone: 09357064101</h5>
        <h5>Email: phy.milad@gmail.com</h5>
      </div>
      <div className="footer__social">
        <h3>Follow us</h3>
        <span className="user">
          <Link to="/">
            <FontAwesomeIcon icon={faUser} size="1.5x" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faUser} size="1.5x" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faUser} size="1.5x" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faUser} size="1.5x" />
          </Link>
        </span>
      </div>
    </div>
  )
}
