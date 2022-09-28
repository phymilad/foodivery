import "../styles/Home.scss"
import React from "react"
import { Link } from "react-router-dom"
import deliveryImg from "../assets/images/hero.png"
import Categories from "../components/UI/category/Categories"
import products from "../assets/fake-data/products"

import featureImage01 from "../assets/images/service-01.png"
import featureImage02 from "../assets/images/service-02.png"
import featureImage03 from "../assets/images/service-03.png"

import foodCategoryImg01 from "../assets/images/hamburger.png"
import foodCategoryImg02 from "../assets/images/pizza.png"
import foodCategoryImg03 from "../assets/images/bread.png"
import ProductCard from "../components/UI/productCard/ProductCard"
import location from "../assets/images/location.png"

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImage01,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    minus: "doloremque1",
  },
  {
    title: "Quick Delivery",
    imgUrl: featureImage02,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    minus: "doloremque2",
  },
  {
    title: "Quick Delivery",
    imgUrl: featureImage03,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    minus: "doloremque3",
  },
]

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__introduction-section">
        <div className="home__introduction-right">
          <section className="home__description-container">
            <h5>Easy way to make an order</h5>
            <h2>
              <span>HUNGRY?</span>Just Wait
            </h2>
            <h3>
              Food at <span>your door</span>
            </h3>
            <p>This resturaunt takes your online orders</p>
            <p>and deliver them to you asap</p>
          </section>

          <section className="order__link-container">
            <Link className="order__link-order">Order Now</Link>
            <Link to={"/foods"} className="order__link-foods">
              See all foods
            </Link>
          </section>

          <section className="delivery__info">
            <p>No shipping charge</p>
            <p>100% Secure Checkout</p>
          </section>
        </div>
        <div className="home__introduction-left">
          <div className="delivery__image-container">
            <img src={deliveryImg} alt="delivery bike" />
          </div>
        </div>
      </div>
      <Categories />
      <section className="home__message-to-customers">
        <h5>
          <strong>What we serve</strong>
        </h5>
        <h2>Just sit back at home</h2>
        <h2>
          We will <strong>take care</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </section>
      <section className="home__features-container">
        {featureData.map((feature, index) => {
          return (
            <div className="feature-container" key={index}>
              <img src={feature.imgUrl} alt="feature" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          )
        })}
      </section>
      <section className="home__popular-foods-container">
        <h2>Popular Foods</h2>
        <div className="home__popular-foods-btn-container">
          <button className="all__foods-button food__button-active">All</button>
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
        <div className="home__popular-items-container">
          {products.map((product, index) => {
            console.log(product.image01)
            return (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                mainImg={product.image01}
              />
            )
          })}
        </div>
      </section>

      <section className="location__container">
        <img src={location} alt="location" />
        <div>
          <h2>
            Why <span>Foodivery?</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="location__options-container">
            <div className="location__option">
              <h4>Fresh and tasty food</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="location__option">
              <h4>Quality support</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="location__option">
              <h4>Order from any location</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
