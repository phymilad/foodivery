import "../styles/Home.scss"
import React, { useMemo, useState } from "react"
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
import location from "../assets/images/location.png"
import ProductCards from "../components/UI/productCard/ProductCards"

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

const initialPopularFoodsCategory = [
  { name: "All", isActive: true, image: null },
  { name: "Burger", isActive: false, image: foodCategoryImg01 },
  { name: "Pizza", isActive: false, image: foodCategoryImg02 },
  { name: "Bread", isActive: false, image: foodCategoryImg03 },
]

export default function Home() {
  const [popularFoodsCategory, setPopularFoodsCategory] = useState(
    initialPopularFoodsCategory
  )

  const [popularFoods, setPopularFoods] = useState(products)

  const handleCategorySelect = (name) => {
    const popularFoodsCategoryCopy = [...popularFoodsCategory]
    setPopularFoodsCategory(
      popularFoodsCategoryCopy.map((item) => {
        return item.name === name
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      })
    )
  }

  useMemo(() => {
    const activePopularFoodName = popularFoodsCategory.find(
      (item) => item.isActive
    ).name
    setPopularFoods(
      activePopularFoodName === "All"
        ? products
        : products.filter((item) => item.category === activePopularFoodName)
    )
  }, [popularFoodsCategory])

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
            <Link className="button_link">Order Now</Link>
            <Link to={"/foods"} className="button_link">
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
          {popularFoodsCategory.map((category) => (
            <button
              key={category.name}
              className={`all__foods-button ${
                category.isActive ? "food__button-active" : ""
              }`}
              onClick={() => handleCategorySelect(category.name)}
            >
              {category.image && (
                <img src={category.image} alt={category.name} />
              )}
              {category.name}
            </button>
          ))}
        </div>
        <ProductCards products={popularFoods} />
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
