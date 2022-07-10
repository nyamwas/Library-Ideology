import React, {useEffect, useState} from 'react'

const CategoriesComponent = (props) => {
	const [categories, setCategories] = useState(new Array())
	const [itemCategory, setItemCategory] = useState("")
	const [categoryLimit, setCategoryLimit] = useState(1)
	const [isLoaded, setIsLoaded] = useState(true)
	const [isUpdated, setIsUpdated] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault()
		let x = categories
		x.push({name: itemCategory, limit: categoryLimit})
		setCategories(x)
	}
	useEffect(() => {
		console.log(`categories loaded`)
	}, []) 
	return(<div>
			{isLoaded && 
			<form className="d-flex bg-info" onSubmit={handleSubmit}>
				<input className="m-2 bg-success" type="text" placeholder="category" onChange={(e) => setItemCategory(itemCategory => e.target.value)} required/>
				<input className="m-2 bg-success" type="number" placeholder="limit" onChange={(e) => setCategoryLimit(categoryLimit => e.target.value)} required/>	
				<input className="m-2 btn-success" type="submit" value="Add to categories"/>
			</form>
			}
			<table className="bg-info m-2">
				<thead>
					<tr>
						<td>Category</td>
						<td>Limit</td>
					</tr>
				</thead>
				<tbody>
				{!isUpdated ? <p>Updating items...</p> : categories.map(category =>
					<tr>
						<td><button>{category.name}</button></td>
						<td><button>{category.limit}</button></td>	
					</tr>
				)}
				</tbody>
				<tfoot>
					<tr>
						<td>
							{categories.length} <span> items </span>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}
export default CategoriesComponent
