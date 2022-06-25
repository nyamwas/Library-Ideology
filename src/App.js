import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
		
		{name: "Jute Mallow"},
    		{name: "Avocado"}
	]
    }
    function handleChange(e)  {
	e.target.value ? this.setState({ items: this.state.items.push(e.target.value)}) : console.log(`enter value`) 
    }
    function handleCart(e) {
	e.preventDefault()
	const { itemDescription } = this.state.items
	const { cartItem } = fetch("http://localhost:4000/checkout", {
		method: "POST",
		body: JSON.stringify(itemDescription),
 		headers: {
			"Content-Type": "application/json"			
		}
	})
	console.log(`Added to cart`)
    }
  }

  render(){
  return (
	<div>
		<div className="container">
			<p>On Sale</p>
			<section className="item-container">
					<div className="card">
						<form onSubmit={this.handleCart}>
							<input type="text" onChange={this.handleChange}/>
							<input type="submit"/>
 						</form>
					</div>
			</section>
			<section className="card">
			{this.state.items.map((item) =>
				<p>{item.name}</p>
			)}
			</section>
		</div>
		<footer>
			<span> greatsilas23 </span> &copy; <span> 2021</span>
		</footer>
	</div>
  )
  }
}

export default App;
