import React from 'react';
import { Link } from 'react-router-dom';
import Styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.container_navbar}>
        <img
          className={Styles.main_logo}
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
          alt="logo"
        ></img>
        <div className={Styles.inputBox}>
          <input
            className={Styles.pincode}
            type="text"
            placeholder="PIN CODE"
            maxlength="6"
          ></input>
          <h1 className={Styles.straightbar}>|</h1>
          <input
            className={Styles.searchbar}
            type="text"
            placeholder="Search Medicines/Healthcare products @18% Off"
          />
        </div>
      </div>

      <div className={Styles.Container2_navbar}>
        <div className={Styles.navbar_products}>
          <p className={Styles.products_line}>Order Medicine</p>
          <Link to="healthcare-products" className={Styles.products_line} style={{textDecoration:"none", color:"white"}} >
            <p className={Styles.products_line}>Healthcare Products</p>
          </Link>
          <p className={Styles.products_line}>Lab Tests</p>
          <p className={Styles.products_line}>RTPCR</p>
        </div>
        <div className={Styles.navbar_products2}>
          <div className={Styles.products_line}>
            <img
              className={Styles.side_logo}
              src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg"
              alt="offers"
            />
            <p>Offers</p>
          </div>
          <div className={Styles.products_line}>
            <img
              className={Styles.side_logo}
              src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg"
              alt="login"
            />
            <p>Login / Signup</p>
          </div>
          <div className={Styles.products_line}>
            <img
              className={Styles.side_logo}
              src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg"
              alt="cart"
            />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar