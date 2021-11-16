import React from 'react'
import {Link} from 'react-router-dom'

function BtnRenderer({products}) {
    return (
        <div className="row_btn">
            <div className="row_btn">
                <Link id="btn_buy" to="#!">
                    Buy
                </Link>
                <Link id="btn_view" to={`details/${products._id}`}>
                    View
                </Link>
            </div>
        </div>
    )
}

export default BtnRenderer
