import "../styles/Home.scss"
import React from "react"
import { Link } from "react-router-dom"
import deliveryImg from "../assets/images/hero.png"
import Categories from "../components/UI/Category/Categories"

import featureImage01 from "../assets/images/service-01.png"
import featureImage02 from "../assets/images/service-02.png"
import featureImage03 from "../assets/images/service-03.png"

import foodCategoryImg01 from "../assets/images/hamburger.png"
import foodCategoryImg02 from "../assets/images/pizza.png"
import foodCategoryImg03 from "../assets/images/bread.png"

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImage01,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    minus: "doloremque1",
  },
  {
    title: "Quick Delivery",
    imgUrl: featureImage02,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    minus: "doloremque2",
  },
  {
    title: "Quick Delivery",
    imgUrl: featureImage03,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    minus: "doloremque3",
  },
]

export default function Home() {
  return (
    <div className="home__container">
      <section className="home__description-container">
        <h5>Easy way to make an order</h5>
        <h1>
          HUNGRY? <span>Just Wait</span>
        </h1>
        <h3>
          Food at <span>your door</span>
        </h3>
        <p>This resturaunt takes your online orders</p>
        <p>and deliver them to you asap</p>
      </section>
      <div className="order__link-container">
        <Link className="order__link-order">Order Now</Link>
        <Link to={"/foods"} className="order__link-foods">
          See all foods
        </Link>
      </div>
      <div className="delivery__info">
        <p>No shipping charge</p>
        <p>100% Secure Checkout</p>
      </div>
      <section>
        <div className="delivery__image-container">
          <img src={deliveryImg} alt="delivery image" />
        </div>
      </section>
      <Categories />
      <section className="home__message-to-customers">
        <h5>
          <strong>What we serve</strong>
        </h5>
        <h2>Just sit back at home</h2>
        <h2>
          We will <strong>take care</strong>
        </h2>
        <p>lorem ipsum is a testimonial text here</p>
        <p>lorem ipsum is a testimonial text</p>
      </section>
      <section className="home__features-container">
        {featureData.map((feature, index) => {
          return (
            <div className="feature-container" key={index}>
              <img src={feature.imgUrl} alt="feature image" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          )
        })}
      </section>
      <section className="home__popular-foods-container">
        <h2>Popular Foods</h2>
        <div className="home__popular-foods-btn-container">
          <button>
            <img src={foodCategoryImg01} alt="Hamburger" />
            Hamburger
          </button>
          <button>
            <img src={foodCategoryImg02} alt="Pizza" />
            Pizza
          </button>
          <button>
            <img src={foodCategoryImg03} alt="Bread" />
            Bread
          </button>
        </div>
      </section>
    </div>
  )
}
