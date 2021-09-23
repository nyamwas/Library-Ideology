import React, { Component } from 'react'
import './App.css'
import Popup from './Popup.js'
import DealerPopup from './DealerPopup.js'
import VehiclePopup from './VehiclePopup.js'
import TopBar from './TopBar.js'
import TopBarTwo from './TopBarTwo.js'
import TopBarThree from './TopBarThree.js'
import FeaturedCars from './FeaturedCars.js'
import NewCars from './NewCars.js'
import Dealers from './Dealers.js'
import VehicleTypes from './VehicleTypes.js'
import Locations from './Locations.js'
import Reviews from './Reviews.js'
import LatestPosts from './LatestPosts.js'
import FeaturedSection from './FeaturedSection.js'
import ContactUs from './ContactUs.js'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sections: {
        "one":"Featured Vehicles",
        "two":"New Vehicles",
        "three":"Vehicle Dealers",
        "four":"Vehicle Types",
        "five":"Locations",
        "six":"Reviews",
        "seven":"Latest News",
        "eight":"Contact Us"
      },
      showPopup: false
    }
  }
  render(){    
    return (
      <div id="parent_div">
        <Popup />
        <DealerPopup />
        <VehiclePopup />
        <TopBar />
        <TopBarTwo />
        <TopBarThree />
        <FeaturedSection sectionName={this.state.sections.one}/>
        <FeaturedCars onPopupShow={this.state.showPopup}/>
        <FeaturedSection sectionName={this.state.sections.two}/>
        <NewCars />
        <FeaturedSection sectionName={this.state.sections.three}/>
        <Dealers />
        <FeaturedSection sectionName={this.state.sections.four}/>
        <VehicleTypes />
        <FeaturedSection sectionName={this.state.sections.five}/>
        <Locations />
        <FeaturedSection sectionName={this.state.sections.six}/>
        <Reviews />
        <FeaturedSection sectionName={this.state.sections.seven}/>
        <LatestPosts />
        <FeaturedSection sectionName={this.state.sections.eight}/>
        <ContactUs />
      </div>)
  }
  
  
}

export default App;
