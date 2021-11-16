import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'

function Header() {
  const state = useContext(GlobalState)

  return (
    <header>
      <div className="menu">
        <img src={process.env.PUBLIC_URL + './assets/images/bars-solid.svg'} width="30" alt=""/>
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Sydell Shop</Link>
        </h1>
      </div>

      <ul>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li>
          <img className="menu" src={process.env.PUBLIC_URL + './assets/images/times-solid.svg'} width="30" alt=""/>
        </li>
      </ul>

      <div className="cart-icon">
        <span>0</span>
        <Link to="/cart">
          <img src={process.env.PUBLIC_URL + './assets/images/shopping-cart-solid.svg'} width="30" alt=""/>
        </Link>
      </div>
    </header>
  )
}

export default Header
