import React from 'react'
import './App.css'
const Dealers = (props) => {
    return (
        <React.Fragment id="dealer_partners">
          <div class="left_align">
            <button class="see_all_bn">SEE ALL</button>
          </div>
          <div className="dealers_card" >
            <div>
              <img alt="default" src={require('./img_dealer_1.png').default} width="250" height="150" />
            </div>
            <div className="dealer_tag">
              <h4>NISSAN</h4>
            </div>
          </div>	
          <div className="dealers_card" >
            <div>
              <img alt="default" src={require('./img_dealer_2.jpg').default} width="250" height="150" />
            </div>
            <div className="dealer_tag">
              <h4>TOYOTA</h4>
            </div>
          </div>	
          <div className="dealers_card" >
            <div>
              <img alt="default" src={require('./img_dealer_3.jpg').default} width="250" height="150" />
            </div>
            <div className="dealer_tag">
              <h4>SUBARU</h4>
            </div>
          </div>	
          <div className="dealers_card" >
            <img alt="default" src={require('./img_dealer_4.png').default} width="250" height="150" />
            <div className="dealer_tag">
              <h4>MISTUBISHI</h4>
            </div>
          </div>
        </React.Fragment>
    )
}
export default Dealers