import React from 'react'
import './App.css'
const Popup = (props) => {
  return(
    <div id="popup" className="card_dialog_box hide_stuff center_stuff horiz add_padding">
      <div className="popup_header flex_stuff center_stuff add_border_radius">          
            <p>PURCHASE ITEM</p>
      </div>
      <div className="sample_container add_padding flex_stuff vertic">
        <div className="card">
          <div>
            <img alt="default" src={require('./img2.jpg').default} width="250" height="150" />
          </div>
          <div>
            <div>
              <p>Price: </p>
            </div>
            <div style={{backgroundColor: 'blue'}}>
              {"Ksh. 1,800,00"}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="add_margin">
            <div><p>Quantity:</p></div>
            <div className="small_badge flex_stuff center_stuff add_margin add_elevation">{2}</div>
          </div>
          <div className="small_container vertic add_margin">
            <button className="small_bn">DECREASE</button>
            <button className="small_bn">ADD</button>
          </div>
          <div className="add_margin">
            <button className="small_bn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="center_stuff">
        <button className="see_all_bn">CLOSE</button>
      </div>
    </div>)
}

export default Popup