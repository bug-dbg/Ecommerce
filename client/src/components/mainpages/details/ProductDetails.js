import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/product_item/ProductItem'

function ProductDetails() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [productDetails, setProductDetails] = useState([])
    
    useEffect(() => {
        if (params.id) {
            products.forEach(product => {
                if (product._id === params.id) setProductDetails(product)
            });
        }
    }, [params.id, products])

    if (productDetails.length === 0) return null;

    return (
        <>
            <div className="details">
                <img src={productDetails.images.url} alt="" />

                <div className="box-details">
                    <div className="row">
                        <h2>{productDetails.title}</h2>
                        <h6>Product ID: {productDetails.product_id}</h6>
                    </div>
                    <span>PHP {productDetails.price}</span>
                    <p>{productDetails.description}</p>
                    <p>{productDetails.content}</p>
                    <p>Sold: {productDetails.sold}</p>
                    <Link to="/cart" className="cart">Buy Now</Link>
                </div>
            </div>
            <div>
                <h2>Related Products:</h2>
                <div className="products">
                    {
                        products.map(products => {
                            return products.category === productDetails.category
                                    ? <ProductItem key={products._id} products={products}/> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductDetails
