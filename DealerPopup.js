import React from 'react'
import './App.css'
const DealerPopup = (props) => {
    return(
    <React.Fragment id="dealer_popup" className="dealer_dialog_box center_stuff horiz">
        <div>
          <img alt="default" src={require('./img_dealer_1.png').default} width="250" height="150" />
        </div>
        <div>
          <h4>NISSAN</h4>
          <hr/>
        </div>
        <div className="vehicle_cards_holder" >
          <div className="card center vertic" >
            <div>
              <img alt="default" src={require('./img_car.jpeg').default} width="250" height="150" />
            </div>
            <div className="container">
              <h3><p>Toyota Land Cruiser</p></h3>
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
    </React.Fragment>)
}

export default DealerPopup