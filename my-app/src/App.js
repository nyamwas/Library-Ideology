
import React, { Component } from 'react'




import Footer from './components/Footer.js'
import Navigation from './components/Navigation.js' 

import Card from './comopnents/Card.js'
class App extends Component{
  constructor(props){
    super(props)
    this.state({

      navigations: [
        {content: "home"},
        {contenti: "about"},
        {content: "feedback"}
     ],
     users: [
        {contenti: "admin"},
        {content: "client"},
        {content: "maintenance"}
     ],

     footers: [
        {content: "facebook"},
        {content: "github"},

     ]
















     

    })
  }
  componentDidMount(){

   axios({

   

      url: "",

      method: "get", 

      withCredentials: true,

      header: {
       Control-Access-Control-Origin: "*",
       Content-Type: "application/json", 

       Accepted: "application/json"

      }
      }).then((response) => {


         if( response && response.data){
             this.setState({users: response.data})
         }

      }).catch((err) => {

         if(err) throw err























      })

      }

       

  render() {

   return (
    <div class="container">

       <header class="header">
           <p>health-inventory-app</p>



           {this.state.navigations.map((navigation) => {<Navigation navigationContent={navigation.content}/>})}  
       </header>
       <section class="body">



           {this.state.users.map((user) => <Card cardContent={user.content} />)} 
      </section>
      <footer class="footer">


        {this.state.footers.map((footer) => {<Footer footerContent={footer.content}/>})}
        <span> greatsilas23 </span> &copy; <span> 2021 </span>
      </footer>
    </div>


















  )

 }

}
export default App;
