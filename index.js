/* Date created: 30 November, 2021*/
const myBorrowForm = document.getElementById('myBorrowForm')
const myAddForm = document.getElementById('myAddForm')
const TabContents = document.getElementsByClassName('formCard')
const availableLink = document.getElementById('availableLink')
const addLink = document.getElementById('addLink')
const borrowLink = document.getElementById('borrowLink')
const returnLink = document.getElementById('returnLink')
const overdueLink = document.getElementById('overdueLink')
const editLink = document.getElementById('editLink')

let myBooks = new Array()
let overdueBooks = new Array()
let messages = new Array()
let returnDate = new Date()
let isValidBorrow = true
let isValidAdd = true
//validation
myBorrowForm.addEventListener('submit', function checkValues(){

})
//borrow
function validateBorrowedBook(){
    const borrowIsbn = myBorrowForm.borrowIsbn
    const borrowRegNo = myBorrowForm.borrowRegNo
    returnDate = myBorrowForm.borrowDueDate
    if(validLengthISBN() && validLengthRegNo() && validBorrowDate()){
        myBooks.push({
            bookISBN: borrowIsbn,
            studentRegNo: borrowRegNo,
            isBorrowed: true,
            returnDate: returnDate
        })
        window.location.href = 'file:///home/silas/Desktop/Clones/financial-MS-/indexTwo.html'
    } else {
            validLengthISBN() == false  ?  messages.push({falseLengthISBN: "Enter a valid ISBN"}) : () => { console.log(`${borrowIsbn} entered correctly`) }
            validLengthRegNo() == false ? messages.push({falseLengthRegNo: "Enter a valid ISBN"}) : () => { console.log(`${borrowRegNo} entered correctly`) }
            validBorrowDate() == false ? messages.push({falseBorrowDate: "Enter a valid ISBN"}) : () => { console.log(` ${returnDate.getDay()} - ${returnDate.getMonth()} - ${returnDate.getYear()} entered correctly`) }
        })
    }

    function validLengthISBN(){
        if(borrowIsbn.value.length < 10){
            document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
            validBorrow = false
        }
        return validBorrow
    }
    function validLengthRegNo (){
        if(borrowRegNo.value.length < 10){
            document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
            validBorrow = false
        }
        return validBorrow
    }
    function validBorrowDate(){
        if(borrowDate.getTime() < 10){
             document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
             validBorrow = false
        }
   	    return validBorrow
    }
}

//add
function validateAddBook(){
    const addIsbn = myAddForm.addIsbn
    const addRegNo = myAddForm.addRegNo
    returnDate = myAddForm.addDueDate
    if(validLengthISBN() && validLengthRegNo() && validAddDate()){
        myBooks.push({
            bookISBN: addIsbn,
            studentRegNo: addRegNo,
            isBorrowed: false,
            returnDate: returnDate
        })
        window.location.href = 'file:///home/silas/Desktop/Clones/financial-MS-/indexTwo.html'
    } else {
            validLengthISBN() == false  ?  messages.push({falseLengthISBN: "Enter a valid ISBN"}) : () => { console.log(`${addIsbn} entered correctly`) }
            validLengthRegNo() == false ? messages.push({falseLengthRegNo: "Enter a valid ISBN"}) : () => { console.log(`${addRegNo} entered correctly`) }
            validAddDate() == false ? messages.push({falseAddDate: "Enter a valid ISBN"}) : () => { console.log(` ${returnDate.getDay()} - ${returnDate.getMonth()} - ${returnDate.getYear()} entered correctly`) }
        })
    }

    function validLengthISBN(){
        if(addIsbn.value.length < 10){
            document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
            validAdd = false
        }
        return validAdd
    }
    function validLengthRegNo (){
        if(addRegNo.value.length < 10){
            document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
            validAdd = false
        }
        return validAdd
    }
    function validAddDate(){
        if(addDate.getTime() < 10){
             document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
             validAdd = false
        }
   	    return validAdd
    }
}

//return
function validateReturnedBook(){
    const returnIsbn = myReturnForm.returnIsbn
    const returnRegNo = myReturnForm.addRegNo
    returnDate = myReturnForm.returnDueDate
    if(validLengthISBN() && validLengthRegNo() && validReturnDate()){
        myBooks.push({
            bookISBN: returnIsbn,
            studentRegNo: returnRegNo,
            isBorrowed: false,
            returnDate: returnDate
        })
        window.location.href = 'file:///home/silas/Desktop/Clones/financial-MS-/indexTwo.html'
    } else {
            validLengthISBN() == false  ?  messages.push({falseLengthISBN: "Enter a valid ISBN"}) : () => { console.log(`${returnIsbn} entered correctly`) }
            validLengthRegNo() == false ? messages.push({falseLengthRegNo: "Enter a valid ISBN"}) : () => { console.log(`${returnRegNo} entered correctly`) }
            validReturnDate() == false ? messages.push({falseReturnDate: "Enter a valid ISBN"}) : () => { console.log(` ${returnDate.getDay()} - ${returnDate.getMonth()} - ${returnDate.getYear()} entered correctly`) }
        })
    }

    function validLengthISBN(){
        if(returnIsbn.value.length < 10){
            document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
            validReturn = false
        }
        return validReturn
    }
    function validLengthRegNo (){
        if(returnRegNo.value.length < 10){
            document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
            validReturn = false
        }
        return validReturn
    }
    function validReturnDate(){
        if(returnDate.getTime() < 10){
             document.getElementById('returnDate').falseLengthISBN = falseLengthISBN
             validReturn = false
        }
   	    return validReturn
    }
}
//overdue
function listOverdue(){
    let i = 0
    forEach(myBooks,  i, function getOverdue() {
        myBooks[i].isBorrowed ? overdueBooks.push({ bookISBN: myBooks[i].bookISBN, studentRegNo: myBooks[i].studentRegNo }) : console.log(`${myBooks[i].bookISBN} available`)
    })
    console.log(overdueBooks)
}
//edit
function editEntry(){
    let isIn = false
    let entryIndex = null
    const editISBN = document.getElementById('editISBN')
    const editAuthor = document.getElementById('editAuthor')
    const editCategory = document.getElementById('editCategory')
    const editLength = document.getElementById('editLength')
    const editRating = document.getElementById('editRating')

    if(findEntry(editISBN.value) >= 0)
        isIn = true

    if(isIn){
        entryIndex = findEntry(editISBN.value)
        myBooks[entryIndex].bookAuthor = editAuthor.value
        myBooks[entryIndex].bookCategory = editCategory.value
        myBooks[entryIndex].bookLength = editLength.value
        myBooks[entryIndex].bookRating = editRating.value
        console.log(`${toString(myBooks[entryIndex])} changed`)
    }
    function findEntry(editISBN){
        for(let i = 0; myBooks.length; i++){
            if(myBooks[i].bookISBN === editISBN){
                return myBooks.indexOf(i)
            }
        }
    }
}

//navigation
function goToMain(){
    window.location.href = 'file:///home/silas/Desktop/Clones/financial-MS-/index.html'
}

function goToReports(reportSection){
    window.location.href = 'file:///home/silas/Desktop/Clones/financial-MS-/indexThree.html#<%=reportSection %>'
}

function nextQn(){
    for(let i = 0; i < TabContents.length; i++){
        TabContents[i].classList.add("slide_left")
    }

}


