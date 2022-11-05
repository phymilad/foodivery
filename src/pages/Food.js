import "../styles/Food.scss"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../assets/fake-data/products"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../store/shopping-cart/cartSlice"
import ProductCarts from "../components/UI/productCard/ProductCards"

export default function Food() {
  const params = useParams()
  const [product, setProduct] = useState({})
  const [similarProducts, setSimilarProducts] = useState()
  const [selectedImage, setSelectedImage] = useState("image01")

  const dispatch = useDispatch()

  useEffect(() => {
    const product = products.find((item) => item.id === params.id)
    const sameCategoryProducts = products.filter(
      (item) => item.category === product.category
    )
    setSimilarProducts(sameCategoryProducts)
    setProduct(product)
  }, [params.id])

  console.log(similarProducts)

  const handleSelectImage = (imageName) => {
    setSelectedImage(imageName)
  }

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        mainImg: product.image01,
        price: product.price,
        title: product.title,
      })
    )
  }

  return (
    <div className="food__container">
      <div className="food-image-info__container">
        <div className="food-images__container">
          <div className="food-thumbnails__container">
            <img
              src={product.image01}
              alt="image1"
              onClick={() => handleSelectImage("image01")}
            />
            <img
              src={product.image02}
              alt="image2"
              onClick={() => handleSelectImage("image02")}
            />
            <img
              src={product.image03}
              alt="image3"
              onClick={() => handleSelectImage("image03")}
            />
          </div>
          <>
            <img src={product[selectedImage]} alt="main image" />
          </>
        </div>
        <div className="food-info__container">
          <h3>{product.title}</h3>
          <h4>category: {product.category}</h4>
          <h5>price: {product.price}$</h5>
          <button className="button_link" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
      <div className="food-extra-info__container">
        <p>{product.desc}</p>
      </div>
      <div className="products-cart__container">
        <ProductCarts products={similarProducts} />
      </div>
    </div>
  )
}
