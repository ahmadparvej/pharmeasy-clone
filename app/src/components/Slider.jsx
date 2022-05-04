import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./TopCrousal.css"
class DemoCarousel extends Component {
    render() {
        return (
            <div className="demo_top_main">
            <Carousel>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/f94b6f47e03-MED25_Dweb.jpg?dim=1440x0&dpr=1.25&q=100" alt="img-1" />
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/b9b34dbc96d-GETCSH_DWEB.jpg?dim=1440x0&dpr=1.25&q=100" alt="img-1" />
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/67c90823870-psp_dweb_may.jpg?dim=1440x0&dpr=1.25&q=100" alt="img-1" />
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/85955054ec0-Surgicare_Dweb_1.jpg?dim=1440x0&dpr=1.25&q=100" alt="img-1" />
                    
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/7400d70904b-DWEB.jpg?dim=1440x0&dpr=1.25&q=100" alt="img-1" /> 
                </div>
               
            </Carousel>
            </div>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


export default DemoCarousel