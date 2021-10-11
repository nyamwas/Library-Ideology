import React from 'react'
import './App.css'
const TopBarTwo = (props) => {
    return(
        <div className="flex_stuff horiz small_height full_width color_green add_absolute_pos horiz_left top_bar_2_pos">      
          <div className="add_absolute_pos top_bar_2_pos small_width small_height align_vertic">
            <img class="add_margin" alt="default" src={require("./menu.png").default} width="30" height="30"/>
          </div>
          <div id="icon" className="add_absolute_pos top_bar_2_pos">
            <p>magari</p><p className="small" >.co.ke</p>	
          </div>
          <div id="item_2_1" className="add_absolute_pos top_bar_2_pos">
            <a href="#new_cars" >New Cars</a>
          </div>
          <div id="item_2_2" className="add_absolute_pos top_bar_2_pos">
            <a>Insurance</a>
          </div>
          <div id="item_2_3" className="add_absolute_pos top_bar_2_pos">
            <a>Car Loans</a>
          </div>
          <div id="item_2_4" className="add_absolute_pos top_bar_2_pos">
            <a href="#dealers" >Winning Dealer</a>
          </div>
          <div id="item_2_5" className="add_absolute_pos top_bar_2_pos">
            <a href="#reviews_section" >Reviews</a>
          </div>
          <div id="item_2_6" className="add_absolute_pos top_bar_2_pos">
            <a href="#blogs" >Blog</a>
          </div>
          <div id="top_bar_2_bn" className="add_absolute_pos top_bar_2_pos">
            <button className="top_bar_2" >Request a car</button>
          </div>
          <div id="top_bar_2_bn_2" className="add_absolute_pos top_bar_2_pos">
            <button className="top_bar_2_bn" >Sell a car</button>
          </div>
        </div>
    )
}
export default TopBarTwo