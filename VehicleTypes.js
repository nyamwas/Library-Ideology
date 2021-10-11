import React from 'react'
import './App.css'
const VehicleTypes = (props) => {
    return(
        <div id="vehicle_types">
          <div class="left_align">
            <button class="see_all_bn">SEE ALL</button>
          </div>
          <div className="card" >
            <div className="add_margin_2">
              <img alt="default" src={require('./car_type_1.png').default} width="215" height="160" />
            </div>
            <div className="dealer_tag">
              <h4>STATION WAGON</h4>
            </div>
          </div>	
          <div className="card" >
            <div className="add_margin_2">
              <img alt="default" src={require('./car_type_2.png').default} width="215" height="160" />
            </div>
            <div className="dealer_tag">
              <h4>SALOON CAR</h4>
            </div>
          </div>	
          <div className="card" >
            <div className="add_margin_2">
              <img alt="default" src={require('./car_type_3.png').default} width="215" height="160" />
            </div>
            <div className="dealer_tag">
              <h4>4WD CARS</h4>
            </div>
          </div>	
          <div className="card" >
            <div className="add_margin_2">
              <img alt="default" src={require('./car_type_4.png').default} width="215" height="160" />
            </div>
            <div className="dealer_tag">
              <h4>4WD CARS</h4>
            </div>
          </div>	
        </div>
    )
}
export default VehicleTypes