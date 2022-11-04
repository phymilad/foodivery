import React from "react"
import mategoryImg01 from "../../../assets/images/category-01.png"
import mategoryImg02 from "../../../assets/images/category-02.png"
import mategoryImg03 from "../../../assets/images/category-03.png"
import mategoryImg04 from "../../../assets/images/category-04.png"
import "../../../styles/category.scss"

const categories = [
  { display: "Fastfood", imgUrl: mategoryImg01 },
  { display: "Pizza", imgUrl: mategoryImg02 },
  { display: "Asian Food", imgUrl: mategoryImg03 },
  { display: "Raw meat", imgUrl: mategoryImg04 },
]

export default function Categories() {
  return (
    <div className="categories__container">
      {categories.map((category, index) => {
        return (
          <div className="category__container" key={index}>
            <img src={category.imgUrl} alt={category.display} />
            <p>{category.display}</p>
          </div>
        )
      })}
    </div>
  )
}
