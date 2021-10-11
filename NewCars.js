import React from 'react'
import './App.css'
const NewCars = (props) => {
    return(
        <div className="featured_cars">
          <div class="left_align">
            <button class="see_all_bn">SEE ALL</button>
          </div>
          <div className="card" >
            <div>
              <img alt="default" src={require('./img_car.jpeg').default} width="250" height="150" />
            </div>
            <div className="container">
              <h3><b>Toyota Land Cruiser</b></h3>
              <p>Ksh. 800,000</p>
            </div>
          </div>		
        </div>
    )
}
export default NewCars