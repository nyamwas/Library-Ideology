# PROPOSAL DOCUMENT: BOOK MS
## INTRODUCTION
A library is an important resource in any academic institution and a valuable for personal research.It can be difficult to keep a track of the books in the school library and the people who have borrowed them. Book MS enables a library staff to keep a record of all the library books and the people who currently have borrowed books.

## TARGET AUDIENCE
This Book MS is meant to be used in a school set up. It can be modified and scaled to suit any requests from users such as:
<ol>
	<li>Public library users</li>
	<li>Private Library users</li>
	<li>Research Library users</li>
	<li>Online Library users</li>
</ol>

## GOALS
Book MS aims to achieve the following objectives:
<ol>
    <li>Keep a record of books present in the library and the books to be added</li>
    <li>Hold information about the students who have borrowed books.</li>
    <li>Maintain accuracy and improve the efficiency of obtaining information regarding the library.</li>
    <li>Make it easy to trace lost books and the students responsible</li>
    <li>Make use of frameworks in order to create an interdependent Information System</li>
    <li>Create a memory efficient yet intensive website</li>
    <li>Create a lightweight but large-scale database of books in a library</li>
</ol>

## SITE MAP
Users will be directed to an entry point that displays index.php and will use hyperlinks to get to indexTwo.php#add , indexThree.php#available and indexTwo.php#edit in order to create, retrieve, update and delete data.
		
<center><img src="dataflow.png" width="800" height="600"></center>

## DESIGN THEMES
The primary coding language is HTML CSS javascript and PHP.We have intergrated various micro services
SQLite API to create a server less and also the jdbc API used to ease the connection to the database

## ROUGH SKETCHES OF EACH PAGE
### index.php - entry point to the website
<center><img src="indexPhp.png" ></center>
<a href="http://https://github.com/greatsilas23/Library-System/blob/main/index.php">indexTwo.php#borrow</a>

### indexTwo.php#add 
- form to add data to the website
<center><img src="indexTwoPhpAdd.png" </center>
<a href="https://github.com/greatsilas23/Library-System/blob/main/indexTwo.php">indexTwo.php#borrow</a>

### indexThree.php#available 
- table that shows available books on the website
<center><img src="indexThreePhpAvailable.png" ></center>
<a href="https://github.com/greatsilas23/Library-System/blob/main/indexThree.php">indexTwo.php#borrow</a>

### indexTwo.php#edit 
- a form that allows modifying attributes of a stored book
<center><img src="indexTwoPhpEdit.png" ></center>
<a href="https://github.com/greatsilas23/Library-System/blob/main/indexTwo.php">indexTwo.php#borrow</a>

### indexThree.php#overdue 
- a table that displays a list of books that have not been returned after the due date
<center><img src="indexThreePhpOverdue.png" ></center>
<a href="http://https://github.com/greatsilas23/Library-System/blob/main/indexThree.php">indexTwo.php#borrow</a>

### indexTwo.php#return 
- a form that allows users to return borrowed books
<center><img src="indexTwoPhpReturn.png" ></center>
<a href="http://https://github.com/greatsilas23/Library-System/blob/main/indexTwo.php">indexTwo.php#borrow</a>

### indexTwo.php#borrow 
- a form that allows users to borrow books from the Book MS database
<center><img src="indexTwoPhpBorrow.png" ></center>
<a href="http://https://github.com/greatsilas23/Library-System/blob/main/indexTwo.php">indexTwo.php#borrow</a>

## DOES THE SITE MEET CRITERIA DEFINED
Our website solved the following problems:
<table>
	<tr>
	    <td>Keep a record of books present in the library and the books to be added</td>
	    <td>Hold information about the students who have borrowed books.</td>
	    <td>Maintain accuracy and improve the efficiency of obtaining information regarding the library.</td>
	    <td>Make it easy to trace lost books and the students responsible</td>
	    <td>Make use of frameworks in order to create an interdependent Information System</td>
	    <td>Create a memory efficient yet intensive website</td>
	    <td>Create a lightweight but large-scale database of books in a library</td>
	</tr>
	<tr>
		<td>Using HTML table elements along with array variables</td>
		<td>Using HTML table elements along with array variables</td>
		<td>Using user defined javascript form validation methods</td>
		<td>Using linear search methods and array variables to qurey a result</td>
		<td>Using third party software such as removal.ai and picsum.photos to offer good design</td>
		<td>Using global variables instead of new local variables for each function</td>
		<td>Using MySQLi via JDBC</td>
	</tr>
</ol>
		
