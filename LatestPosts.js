import React from 'react'
import './App.css'
const LatestPosts = (props) => {
    return(
        <div className="posts">
          <div class="left_align">
            <button class="see_all_bn">SEE ALL</button>
          </div>
          <div className="card">
            <div>
              <img alt="default" src={require('./post_1.png').default} width="250" height="150" />
            </div>
            <div className="container">
              <h3><b>Rising Fuel Prices In The Continent</b></h3>
            </div>
          </div>		
          <div className="card">
            <div>
              <img alt="default" src={require('./post_2.jpeg').default} width="250" height="150" />
            </div>
            <div className="container">
              <h3><b>Reckless Driving In Sub-urban Areas</b></h3>
            </div>
          </div>
          <div className="card">
            <div>
              <img alt="default" src={require('./post_3.jpeg').default} width="250" height="150"/>
            </div>
            <div className="container">
              <h3><b>Construction Of New Expressway</b></h3>
            </div>
          </div>
        </div>
    )
}
export default LatestPosts