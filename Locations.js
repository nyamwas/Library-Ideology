import React from 'react'
import './App.css'
const Locations = (props) => {
    return(
        <div className="locations center_stuff horiz">
          <div>
            <img alt="default" src={require('./location_icon.jpg').default}  width="50" height="50"/>
            <h3>Kisumu</h3>
          </div>
          <div>
            <img alt="default" src={require('./location_icon.jpg').default}  width="50" height="50"/>
            <h3>Nairobi</h3>
          </div>
          <div>
            <img alt="default" src={require('./location_icon.jpg').default}  width="50" height="50"/>
            <h3>Mombasa</h3>
          </div>
        </div>
    )
}
export default Locations