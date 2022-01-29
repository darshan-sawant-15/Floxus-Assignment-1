//Assignment-1

// 1. Find the table with id 'age-table'.
age_table = document.getElementById("age-table")
// Output:age_table = <table id=​"age-table">​…​</table>​


//2. Find all the label elements inside that table (there should 3 of them).
labels = document.getElementsByTagName("label")
//Output: labels = HTMLCollection(4) [label, label, label, label]
labels [0]
//Output: <label>​<input type=​"radio" name=​"age" value=​"young">​"less than 18"</label>​
labels [1]
//Output: <label><input type="radio" name="age" value="mature">18-50</label>
labels [2]
//Output: <label><input type="radio" name="age" value="senior">more than 50</label>


//3. Find the first td element of the table with the text "Age: ".
firstTd = document.querySelector("td")
//Output: <td>Age:</td>


//4. Find the form with name "search".
form = document.querySelector("form")
/*Output: <form name="search">
    <label>Search the site:
    <input type="text" name="search">
  </label>
  <input type="submit" value="Search!">
</form>*/


//5. Find the first and the last input in that form.
input = document.querySelectorAll("input")
//Output: NodeList(9) [input, input, input, input, input, input, input, input, input]
input[0]
//Output: <input type="text" name="search">
input[1]
//Output: <input type=​"submit" value=​"Search!">​