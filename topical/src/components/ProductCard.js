import React from 'react'
import { Route, Link } from 'react-router-dom'
import ProductDetail from './ProductDetail'

const ProductCard = props => {
  const { name, image, upc } = props

  return (
    <>
      <Link to={`/product/${upc}/`}>
        <div key={upc}>
          <h1>{name}</h1>
          <h2>{upc}</h2>
          <img src={image} alt={name} />
        </div>
      </Link>
    </>
  )
}

export default ProductCard
