import React from 'react'
import './App.css'
const Reviews  = (props) => {
    return(
        <React.Fragment className="review_items add_padding">
          <div className="review"><p>This website is amazing, I bought a second-hand vehicle in good condition </p></div>
          <div className="review_2"><p>For anyone looking for a fast way to purchase, this is the place</p></div>
          <input className="add_review align_bottom center_align_2" placeholder="Add Review"/> 
        </React.Fragment>
    )
}
export default Reviews