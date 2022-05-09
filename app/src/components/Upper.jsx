import React from 'react';
import Styles from './Upper.module.css'

const Upper = () => {
  return (
    <div>
      <div className={Styles.upper_container}>
          <div className={Styles.upper_main}>
              <div className={Styles.upper_middle}>
                  <h4 className={Styles.upper_line}>Order Medicine</h4>
                  <img className={Styles.upper_image} src='https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1.25&q=100' alt='logo'/>
              </div>
              <div>
                  <button className={Styles.upper_button}>Order Now</button>
              </div>
          </div>
          <div className={Styles.upper_main}>
              <div className={Styles.upper_middle} style={{backgroundColor:"rgb(253,242,210)"}}>
                  <h4 className={Styles.upper_line}>Order Medicine</h4>
                  <img className={Styles.upper_image} src='https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1.25&q=100' alt='logo'/>
              </div>
              <div>
                  <button className={Styles.upper_button} style={{backgroundColor:"rgb(252,128,25)"}}>Order Now</button>
              </div>
          </div>
          <div className={Styles.upper_main}>
              <div className={Styles.upper_middle} style={{backgroundColor:"rgb(214,240,255)"}}>
                  <h4 className={Styles.upper_line}>Order Medicine</h4>
                  <img className={Styles.upper_image} src='https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1.25&q=100' alt='logo'/>
              </div>
              <div>
                  <button className={Styles.upper_button} style={{backgroundColor:"rgb(0,185,225)"}}>Order Now</button>
              </div>
          </div>

          
      </div>
      <div className={Styles.upper_lower}>
           <img className={Styles.upper_image2} src='https://assets.pharmeasy.in/web-assets/dist/e3db129c.png' alt='logo'/>
           <h4>Save flat 5% extra on medicines & enjoy free delivery with plus membership</h4>
           <img className={Styles.upper_image3} src='https://assets.pharmeasy.in/web-assets/dist/b20b0932.png' alt='logo'/>
      </div>
    </div>
  )
}

export default Upper
