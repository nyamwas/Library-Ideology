import React from 'react'
import './App.css'
const TopBar = (props) => {
    return(
        <React.Fragment id="top_bar">
          <div id="item_1_1" >
            <a href="#contact_us">Contact us</a>
          </div>
          <div id="item_1_2" >
            <a>Register</a>
          </div>
          <div id="item_1_3" >
            <a>Login</a>
          </div>
          <div id="item_1_4" >
            <a>Login Dealer</a>
          </div>
        </React.Fragment>
    )
}
export default TopBar