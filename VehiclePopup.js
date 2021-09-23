import React from 'react'
import './App.css'
const VehiclePopup = (props) => {
    return(
        <React.Fragment id="vehicle_type_popup" className="vehicle_type_dialog center_stuff horiz hide_stuff">
          <div>
            <img alt="default" src={require('./car_type_3.png').default} width="215" height="160" />
            <h4>4WD Vehicles</h4>
            <hr/>
          </div>
          <div className="vehicle_type_card_holder">
            <div className="card" >
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
                <img alt="default" src={require('./img4.jpg').default} width="250" height="150" />
              </div>
              <div className="container">
                <h3><b>Toyota Land Cruiser</b></h3>
                <p>Ksh. 1,200,000</p>
              </div>
            </div>
            <div className="card" >
              <div>
                <img alt="default" src={require('./img5.jpg').default} width="250" height="150" />
              </div>
              <div className="container">
                <h3><b>Toyota Land Cruiser</b></h3>
                <p>Ksh. 1,700,000</p>
              </div>
            </div>			
          </div>
          <div>
            <button >CLOSE</button>
          </div>
        </React.Fragment>
    )
}

export default VehiclePopup