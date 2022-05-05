import React from 'react'
import Styles from './FooterHome.module.css'

const FooterHome = () => {
  return (
    <div>
      <div className={Styles.footer1}>
        <div className={Styles.part1}>
          <h2 className={Styles.footerline1}>
            Simplifying Healthcare, Impacting Livesh
          </h2>
          <h2 className={Styles.footerline2}>Download the App for free</h2>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"
              
            >
              <img
                className={Styles.footerimage}
                src="https://assets.pharmeasy.in/web-assets/dist/4e4f1cab.png"
                alt="google"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
              
            >
              <img
                className={Styles.footerimage}
                src="https://assets.pharmeasy.in/web-assets/dist/83095c03.png"
                alt="apple"
              />
            </a>
          </div>
        </div>
        <img
          className={Styles.sideimage}
          src="https://assets.pharmeasy.in/web-assets/dist/1d1ccea7.jpg"
          alt="footer"
        />
      </div>
      <div className={Styles.footer2}></div>
      <div className={Styles.footer3}></div>
    </div>
  );
}

export default FooterHome
