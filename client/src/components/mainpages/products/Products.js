import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/product_item/ProductItem'

function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products

    return (
        <div className="products">
            {
                products.map(products => {
                    return <ProductItem key={products._id} products={products}/>
                })
            }
        </div>
    )
}

export default Products
