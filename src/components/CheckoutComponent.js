import React, {useState, useEffect} from 'react'

const CheckoutComponent = (props) => {

	const [isLoaded, setIsLoaded] = useState(true)
	const [isUpdated, setIsUpdated] = useState(true)
	const [name, setName] = useState("")
	const [quantity, setQuantity] = useState(1)	
	const [total, setTotal] = useState(0)
	const [itemsList, setItemsList] = useState(new Array())
	useEffect(() => {
		console.log(`${itemsList}`)
	}, [])
	const handleName = (e) => {
		setIsUpdated(false)
		setName(name => e.target.value)	
	}
	const handleQuantity = (e) => {
		setIsUpdated(false)
		setQuantity(quantity => e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		let x = itemsList
		x.push({name: name, quantity: quantity})
		setItemsList(x)
		setIsUpdated(true)
	}

	return(
		<div className="bg-warn">
			<h2>Checkout</h2>
			<hr/>					
			<section  className=" bg-info">
				<form className="d-flex" 
onSubmit={handleSubmit}>
					<input className="m-2 bg-success" onChange={handleName} placeholder="Name"/>
					<input type="number" className="m-2 bg-success" onChange={handleQuantity} placeholder="Quantity"/>
					<input type="submit" value="Add to cart" className="m-2 btn-success"/>
				</form>
			</section>
			<hr/>
			{isLoaded &&  
				<table>
					<thead>
						<tr colSpan="3" className="bg-info">
							<td className="p-2 bg-info">
								Name
							</td>
							<td className="w-10 p-2 bg-info">
								Quantity
							</td>
						</tr>
					</thead>
					<tbody>
					{!isUpdated ? <p>Updating Items In Cart...</p> : itemsList.map(items =>
						<tr key={Math.floor(Math.random(9))}>
							<td>
								<button>{items.name}</button>
							</td>
							<td>
								<button>{items.quantity}</button>
							</td>

						</tr>
					)}
					</tbody>
					<tfoot>
						<tr>
							<td className="p-2 bg-info" colSpan="3">
								{itemsList.length} Items 
							</td>
						</tr>
					</tfoot>
				</table>}
			<hr/>
		</div>
	)
}

export default CheckoutComponent
