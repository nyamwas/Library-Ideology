import React from 'react'
import './App.css'
const TopBar = (props) => {
    return(
        <div className="small_height full_width level_1 flex_stuff horiz add_absolute_pos horiz_left top_bar_pos">
          <div className="small_height small_width level_2 align_vertic add_absolute_pos top_bar_pos horiz_right_1" >
            <a href="#contact_us">Contact us</a>
          </div>
          <div className="small_height small_width align_vertic add_absolute_pos top_bar_pos horiz_right_2" >
            <a>Register</a>
          </div>
          <div className="small_height small_width align_vertic add_absolute_pos top_bar_pos horiz_right_3" >
            <a>Login</a>
          </div>
          <div className="small_height small_width align_vertic add_absolute_pos top_bar_pos horiz_right_4" >
            <a>Login Dealer</a>
          </div>
        </div>
    )
}
export default TopBar