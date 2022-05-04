import React from 'react'
import Styles from './FooterHome.module.css'

const FooterHome = () => {
  return (
    <div>
      <div className={Styles.footer1}>
          <div className={Styles.part1}>
              <h2 className={Styles.footerline1}>Simplifying Healthcare, Impacting Lives</h2>
              <h2 className={Styles.footerline2}>Download the App for free</h2>
              <div>
                  <img className={Styles.footerimage} src='https://assets.pharmeasy.in/web-assets/dist/4e4f1cab.png' alt='google'/>
                  <img className={Styles.footerimage} src='https://assets.pharmeasy.in/web-assets/dist/83095c03.png' alt='apple'/>
              </div>

          </div>
          <img className={Styles.sideimage} src='https://assets.pharmeasy.in/web-assets/dist/1d1ccea7.jpg' alt='footer'/>
      </div>
      <div className={Styles.footer2}></div>
      <div className={Styles.footer3}></div>
    </div>
  )
}

export default FooterHome
