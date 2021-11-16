import React from 'react'
import {Link} from 'react-router-dom'

function ProductItem({products}) {
    return (
        <div className="product_card">
            <img src={products.images.url} alt="" />

            <div className="product_box">
                <h2 title={products.title}>{products.title}</h2>
                <span>PHP {products.price}</span>
                <p>{products.description}</p>
            </div>
            <div className="row_btn">
                <Link id="btn_buy" to="#!">
                    Buy
                </Link>
                <Link id="btn_view" to={`/details/${products._id}`}>
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductItem
