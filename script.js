/*Date created: 9th May
Author: greatsilas23
Date modified: 
*/

function addItem() {  fetch("http://localhost:4000/records.json").then((results) => {
    console.log(results)
    results.json()
},
(error) => {
    console.log(error)
}).then((response) => {
    console.log(response)
})

}

console.log('found', addItem())