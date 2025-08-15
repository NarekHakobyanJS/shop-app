import React from 'react'
import Product from '../Product/Product';

const ProductCard = ({productsData} : any) => {

    
  return (
    <div>
        {
            productsData.products.map((product : any) => <Product product={product}/>)
        }
    </div>
  )
}

export default ProductCard