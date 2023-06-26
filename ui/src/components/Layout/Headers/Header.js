import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Fragment>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Products">Product</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
      </ul>
    </div>
    
  </div>
</nav>

      </ Fragment>
  )
}

export default Header