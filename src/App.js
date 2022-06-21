import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showHome: false,
      showLogin: true,
      validLogin: false,
      users: [],
      items: []

   }
  }
	componentDidMount(){
	 	const item  = fetch("http://localhost:4000/checkout")
		const response = item.json()
		this.setState({ items: response})
	}
  render(){
  return (
<div>
	<header>
		<img  width="40" height="40" alt="logo"/>
		<section className="navigation">
			<a href="index.html"><img  width="40" height="40" alt="login"/></a>
			<a href="checkout.html"><img  width="40" height="40" alt="cart"/></a>
			<a href="billing.html"><img  width="40" height="40" alt="bill "/></a>
			<a href="login.html"><img  width="40" height="40" alt="login"/></a>
		</section>
	</header> 
	<div className="container">
		<section className="blur">  
			<section className="menu hide">
				<img  width="40" height="40" alt="vegetables" />
				<h2>Vegetables</h2>  
				<form onSubmit={handleAddToCart} method="post">
					<img alt="logo" height="50" width="50" /> 
					<hr/>
					<input type="number" value="1" className="input" id="qty" name="qty" />
					<button className="button">
						<img width="60" height="30" />
					</button>
				</form>
			</section>
		</section>
		<section className="item-container">
			<div className="card">
				<img height="50" width="50" alt="item"/>
				<h3>Ksh. 100</h3> 
				<form action="http://loalchost:4000/billing" method="post">
			  		<input type="image" width="30" height="30" alt="buy" />
				</form>
			</div>
			<div className="card">
				<img height="50"  width="50" alt="item"/>
				<h3>Ksh. 200</h3>
				<input type="image" className="button"  width="40" height="40"/>
			</div>
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
