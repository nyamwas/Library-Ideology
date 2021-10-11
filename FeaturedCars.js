import React from 'react'
import './App.css'
const FeaturedCars = (props) => {
    return(
        <div id="featured_cars" className="featured_cars">
          <div className="left_align">
            <button class="see_all_bn">SEE ALL</button>
          </div>
          <div className="card">
            <div>
              <img alt="default" src={require('./img_car.jpeg').default} width="250" height="150" />
            </div>
            <div className="container">
              <h3><b>Toyota Land Cruiser</b></h3>
              <p>Ksh. 800,000</p>
            </div>
          </div>
          <div className="card" >
            <div>
              <img alt="default" src={require('./img2.jpg').default} width="250" height="150" />
            </div>
            <div className="container">
              <h3><b>Toyota Land Cruiser</b></h3>
              <p>Ksh. 1,800,000</p>
            </div>
          </div>
          <div className="card" >
            <div>
              <img alt="default" src={require('./img4.jpg').default} width="250" height="150" />
            </div>
            <div className="container">
              <h3><b>Toyota Land Cruiser</b></h3>
              <p>Ksh. 1,200,000</p>
            </div>
          </div>					
        </div>
    )
}
export default FeaturedCars