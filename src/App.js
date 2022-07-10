import React, { Component } from 'react'
import CheckoutComponent from './components/CheckoutComponent.js'
import CategoriesComponent from './components/CategoriesComponent.js'
import './App.css'
class App extends Component {
     constructor(props){
       super(props)
       this.state = {
         items: new Array(),
	 categories: new Array(),
	 userRequest: "",
	 formVisible: true,
	 checkoutVisible: false,
	 categoriesVisible: false
       }
       this.handleGetData = this.handleGetData.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
     }
     handleGetData (){
	return fetch("http://localhost:4000/checkout", {
		headers: {
			"Allow-Control-Access-Origin": "*",
			"Content-Type": "application/json",
		}
	})
	.then((response) => {
		return response.json()
	})
	.then((res) => {
		return res
	})
	.catch((err) => {
		if(err) console.log(err)
	})
     } 
     handleChange(e){
	e.target.value ? this.setState({ userRequest : e.target.value }) : this.setState({ userRequest : "" })


     }
     handleSubmit(e){
		e.preventDefault()
		const data = this.state.userRequest
		fetch("http://localhost:4000/checkout", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Allow-Control-Access-Origin": "*",
				"Content-Type": "application/json",
			}
		})
		.then((res) => {
			res.json()
		})
		.then((results) => {
			console.log(results)
		})
		.catch((err) => {
			if(err) console.log(err)
		})
		window.location = "http://localhost:3000"
		window.alert(`Item Added`)	
     }
     componentDidMount(){
	this.handleGetData().then((result) => {
		let data = result
		this.setState({ items: data})
	})	
     }
  
  render(){
  return (
	<div>
		{this.state.checkoutVisible && <CheckoutComponent itemsList={this.state.items}/>}

		{this.state.categoriesVisible && <CategoriesComponent itemsList={this.state.categories}/>}
		<footer>
			<div className="p-2">
				<button className="btn-success m-2" onClick={() => this.setState({categoriesVisible : false, checkoutVisible: true})}>Checkout</button>
				<button className="btn-success m-2" onClick={() => this.setState({categoriesVisible : true, checkoutVisible: false})}>Categories</button>
				<button className="btn-success m-2">Feedback</button>
				<button className="btn-success m-2">FAQ</button>
			</div>
			<span> greatsilas23 </span> &copy; <span> 2021</span>
		</footer>
	</div>
  )
  }
}

export default App;
