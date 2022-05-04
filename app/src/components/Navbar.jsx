import React from 'react';
import Styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.container_navbar}>
         <img className={Styles.main_logo} src='https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png' alt='logo'></img>
         <div className={Styles.inputBox}>
           <input className={Styles.pincode} type='number' placeholder='PIN CODE'></input>
           <h1 className={Styles.straightbar}>|</h1>
           <input className={Styles.searchbar} type="text" placeholder='Search Medicines/Healthcare products @18% Off'/>
         </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar
