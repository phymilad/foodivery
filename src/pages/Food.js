import "../styles/Food.scss"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../assets/fake-data/products"

export default function Food() {
  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    setProduct(products.find((item) => item.id === params.id))
  }, [])

  console.log(product)

  console.log(params)
  return (
    <div className="food__container">
      <div className="food-image-info__container">
        <div className="food-images__container">
          <div className="food-thumbnails__container">
            <img src={product.image01} alt="image1" />
            <img src={product.image02} alt="image2" />
            <img src={product.image03} alt="image3" />
          </div>
          <img src={product.image01} alt="main image" />
        </div>
        <div className="food-info__container">Info</div>
      </div>
      <div className="food-extra-info__container">
        Extra information container
      </div>
    </div>
  )
}
