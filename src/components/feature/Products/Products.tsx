import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'

const Products = () => {
    const {products} = useSelector((state : any) => state.productsPage)

  return (
    <div>
       {
        products.map((productsData : any, index : string) => <ProductCard key={index} productsData={productsData}/>)
       }
    </div>
  )
}

export default Products