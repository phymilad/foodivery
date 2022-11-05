import React from "react"
import ProductCard from "./ProductCard"
import "../../../styles/ProductCarts.scss"

export default function ProductCarts({ products }) {
  return (
    <div className="product-carts__container">
      {products?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            mainImg={product.image01}
          />
        )
      })}
    </div>
  )
}
