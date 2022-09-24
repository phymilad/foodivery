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
        <div>
          <img src={logo} alt="Foodivery logo" />
          <h5>Foodivery</h5>
        </div>
        <p>lorem ipsum is a testimonial passage for web developers.</p>
      </div>
      <div className="footer__schedule">
        <h3>Delivery Time</h3>
        <div>
          <strong>Sunday-Thursday </strong> 11:00 am - 11:00 pm
        </div>
        <div>
          <strong>Friday - Saturday</strong> Off days
        </div>
      </div>
      <div className="footer__contact">
        <h3>Contact</h3>
        <div>
          <strong>Phone:</strong> 09357064101
        </div>
        <div>
          <strong>Email:</strong> phy.milad@gmail.com
        </div>
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
