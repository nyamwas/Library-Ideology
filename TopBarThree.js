import React from 'react'
import './App.css'
const TopBarThree = (props) => {
    return(
        <React.Fragment id="top_bar_3">
          <div id="car_loans_form_8" className="request_car_form">
            <form id="loan_details_form" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label>Car Make</label>
                <input id="car_make" type="text" placeholder="example: Subaru"/>
                <label>Car Model</label>
                <input id="car_model" type="text" placeholder="example: Forester (2010)"/>
              </div>
              <div>
                <button >Apply Loan</button>
              </div>
              <div>
                <p id="var_err"></p>
              </div>
            </form>
          </div>
          <div id="car_loans_form_10" className="sell_car_form">
            <form id="loan_details_form" onsubmit={(e) => e.preventDefault()}>
              <div>
                <label>Car Make</label>
                <input id="car_make" type="text" placeholder="example: Subaru"/>
                <label>Car Model</label>
                <input id="car_model" type="text" placeholder="example: Forester (2010)"/>
                <label>Car Price</label>
                <input id="car_price" type="text" placeholder="example: Ksh. 300,000"/>
              </div>
              <div className="center_stuff">
                <button >SELL CAR</button>
              </div>
              <div className="center_stuff">
                <p id="var_err"></p>
              </div>
            </form>
          </div>
          <div id="insurance_form">
            <div className="insurance_container">
              <div className="tile">
                <img alt="default" src={require('./aaa_insurance.gif').default} width="250" height="50" />
              </div>
              <div className="tile">
                <img alt="default" src={require('./allstate_insurance.png').default} width="250" height="50" />
              </div>
              <div className="tile">
                <img alt="default" src={require('./nationwide.jpeg').default} width="250" height="50" />
              </div>
            </div>
          </div>
      
          <div id="car_loans_form">
            <form id="loan_details_form" onSubmit={(e) => e.preventDefault()}>
              <div className="center_stuff">
                <label>Car Make</label>
                <input id="car_make" type="text" placeholder="example: Subaru"/>
                <label>Car Model</label>
                <input id="car_model" type="text" placeholder="example: Forester (2010)"/>
                <label>Car Price</label>
                <input id="car_price" type="text" placeholder="example: Ksh. 300,000"/>
                <label>Loan Period</label>
                <input id="loan_period" type="text" placeholder="example: 2 years"/>
              </div>
              <div className="center_stuff">
                <button >Apply Loan</button>
              </div>
              <div className="center_stuff">
                <p id="var_err"></p>
              </div>
            </form>
          </div>
          <div className="bottom_align center_align_2">
            <h2 className="visible_text">EVERY CAR TELLS A STORY</h2>
          </div>
        </React.Fragment>
    )
}
export default TopBarThree