import React from 'react'
import './App.css'
const TopBarTwo = (props) => {
    return(
        <React.Fragment id="top_bar_2">      
          <div id="login_form">
            <form id="login_details_form" onSubmit={(e) => e.preventDefault()}>
              <div className="center_stuff">
                <label>E-mail or Username</label>
                <input id="login_usr_name_or_email" type="text" placeholder="example: jdoe@gmail.com"/>
                <label>Password</label>
                <input id="login_usr_pass" type="password" placeholder="example: ****"/>
              </div>
              <div className="center_stuff">
                <button >Log In</button>
              </div>
              <div className="center_stuff">
                <p id="var_err"></p>
              </div>
            </form>
          </div>
          <div id="register_form">
            <form id="register_details_form" onSubmit={(e) => e.preventDefault()}>
              <div className="center_stuff">
                <label>First Name</label>
                <input id="usr_fname" type="text" placeholder="example: John"/>
                <label>Last Name</label>
                <input id="usr_lname" type="text" placeholder="example: Doe"/>
                <label>Pick a Username</label>
                <input id="usr_name" type="text" placeholder="example: jdoe"/>
                <label>E-mail</label>
                <input id="usr_email" type="text" placeholder="example: jdoe@gmail.com"/>
                <label>Password</label>
                <input id="usr_pass" type="password" placeholder="example: ****"/>
                <label>Confirm Password</label>
                <input id="usr_pass_confirm" type="password" placeholder="example: ****"/>
              </div>
              <div>
                <button >Register</button>
              </div>
              <div className="center_stuff">
                <p id="var_err_register"></p>
              </div>
            </form>
          </div>
          <div id="dealer_form">
            <form id="login_details_form" onSubmit={(e) => e.preventDefault()}>
              <div className="center_stuff">
                <label>E-mail or Username</label>
                <input id="login_usr_name_or_email" type="text" placeholder="example: jdoe@gmail.com"/>
                <label>Password</label>
                <input id="login_usr_pass" type="password" placeholder="example: ****"/>
              </div>
              <div className="center_stuff">
                <button >Log In</button>
              </div>
              <div className="center_stuff">
                <p id="var_err"></p>
              </div>
            </form>
          </div>
          <div>
            <img class="add_margin" alt="default" src={require("./menu.png").default} width="30" height="30"/>
          </div>
          <div id="icon">
            <p>magari</p><p className="small" >.co.ke</p>	
          </div>
          <div id="item_2_1" >
            <a href="#new_cars" >New Cars</a>
          </div>
          <div id="item_2_2" >
            <a>Insurance</a>
          </div>
          <div id="item_2_3" >
            <a>Car Loans</a>
          </div>
          <div id="item_2_4" >
            <a href="#dealers" >Winning Dealer</a>
          </div>
          <div id="item_2_5" >
            <a href="#reviews_section" >Reviews</a>
          </div>
          <div id="item_2_6" >
            <a href="#blogs" >Blog</a>
          </div>
          <div id="top_bar_2_bn" >
            <button className="top_bar_2" >Request a car</button>
          </div>
          <div id="top_bar_2_bn_2" >
            <button className="top_bar_2_bn" >Sell a car</button>
          </div>
        </React.Fragment>
    )
}
export default TopBarTwo