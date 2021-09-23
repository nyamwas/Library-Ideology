import React from 'react'
import './App.css'
const ContactUs = (props) => {
    return(
        <React.Fragment id="contact_us">
          <div className="card">
            <div>
              <img alt="default" src={require('./instagram.png').default} width="150" height="150" />
            </div>
            <div id="gram">
              <h3>@silas.n_</h3>
            </div>
          </div>
          <div id="details_card" className="card">
            <div>
              <img alt="default" src={require('./facebook.png').default} width="200" height="150" />
            </div>
            <div id="gram">
              <h3>@Silas Nyamwange</h3>
            </div>
          </div>	
        </React.Fragment>
    )
}
export default ContactUs