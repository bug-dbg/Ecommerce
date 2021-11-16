import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Products from './products/Products'
import ProductDetails from './details/ProductDetails'
import Login from './auth/Login'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'

function Pages() {
    return (
         <Routes>
            <Route path="" element={<Products/>} />
            <Route path="/details/:id" element={<ProductDetails/>} />
            <Route path="login" element={<Login/>} />
            <Route path="cart" element={<Cart/>} />
            
            <Route path="*" element={<NotFound/>} />
        </Routes> 
       
    )
}

export default Pages
