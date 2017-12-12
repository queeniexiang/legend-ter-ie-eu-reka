// legend-ter-ie-eu-reka: Terry Guan, Queenie Xiang, Eugene Thomas
// SoftDev1 pd7
// HW#16: Sequential Progression II: Electric Boogaloo
// 2017-12-11

var index = 8; // The counter for how many elements there are in the list.
var fibIndex = 0; // The counter for how many times the fibonacci button has been pressed.

/*
PHASE III:

Upon button push, add an element to the list.
When the mouse goes over an item in the list, change the heading at the top to contain the text of the item.
When the mouse is no longer over an item in the list, change the heading back to "Hello World!".
When an item on the list is clicked, remove it from the DOM.
*/

// =========================================== PHASE III =========================================================

// adds element to the list upon button push
var addElement = function() {
  var c = document.createElement('li');
  c.innerHTML += 'item ' + index;
  index++; // Increases the index
  // The following three lines ensure that the site still runs once the button is pressed:
  c.addEventListener("mouseover", changeHeader);
  c.addEventListener("mouseout", resetHeader);
  c.addEventListener("click", removeElement);
  var d = document.getElementById('thelist');
  d.appendChild(c);
  //console.log(element);
};

//removes element
var removeElement = function() {
  this.remove();
  index--; // Decreases the index.
  // this will later refer to the li item when we addEventListener
};

// changes innerHTML of header to this.innerHTML.
// this will later be linked to a li item
var changeHeader = function() {
  var h = document.getElementById("h");
  h.innerHTML = this.innerHTML;
  console.log("header was changed to " + this.innerHTML);
};

// reverses above function changeHeader
var resetHeader = function() {
  var h = document.getElementById("h");
  h.innerHTML = "Hello World!";
  console.log("header was reset");
};

// links the button to the event click and function add element
var b = document.getElementById("b");
b.addEventListener('click', addElement);


// list of all li items
var liItems = document.getElementsByTagName("li");
console.log(liItems);

// links all the li items to events
for (var i = 0; i < liItems.length; i++) {
  console.log(liItems[i]);
  liItems[i].addEventListener("mouseover", changeHeader);
  liItems[i].addEventListener("mouseout", resetHeader);
  liItems[i].addEventListener("click", removeElement);
}
// ====================================================================================================================

/*
PHASE IV:

Add a second list to the html page. Do not add elements to it.
Create a second button. When the second button is pressed, add a new item to your list, showing the next Fibonacci number.
*/

// ================================================= PHASE IV =========================================================

// The method to return the nth fibonacci number.
var fibonacci = function(n) {

    if (n == 0) {
        return 0;
    }
    if (n < 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// To create the fibList...
var addListFib = function() {
    var newList = document.createElement('ul'); // Creates a new list
    newList.setAttribute("id", "fibList"); // Gives the list an ID
    var fibButton = document.createElement('button'); // Creates a new button
    fibButton.setAttribute("id", "fibButton"); // Gives the button an ID
    fibButton.innerHTML = "Fib Button"; // Gives the button a label (using innerHTML)
    fibButton.addEventListener("click", fibClick); // Gives the button an event
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(newList);
    body.appendChild(fibButton);
}

// Reveals each fibonacci number in order. Triggered by the click.
var fibClick = function() {
    var c = document.createElement('li');
    num = fibonacci(fibIndex);
    c.innerHTML += 'Term: ' + fibIndex + ': '; 
    c.innerHTML += num;
    fibIndex++; // Increases the index
    var fibList = document.getElementById('fibList');
    fibList.appendChild(c);
}

addListFib();
var fibButton = document.getElementById("fibButton");  
fibButton.addEventListener('click', fibClick); 

var array = [];

//The Bailey–Borwein–Plouffe formula || Credits: https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula
var piGenerator = function() {
    for (var i = 0; i < 999; i++) {
	array.push ( Math.floor( ( (1/Math.pow(16, i)) *
			   ( (4/((8*i) + 1) -
			      (2/((8*i)+4)) -
			      (1/((8*i)+5)) -
			      (1/((8*i)+6))) ) )
			       )
		   );
		  
    }
    console.log(array); 
};
piGenerator();

/* 
var addListPi = function() {
    var newList = document.createElement('ul'); // Creates a new list
    newList.setAttribute("id", "piList"); // Gives the list an ID
    var fibButton = document.createElement('button'); // Creates a new button
    fibButton.setAttribute("id", "piButton"); // Gives the button an ID
    fibButton.innerHTML = "Pi Button"; // Gives the button a label (using innerHTML)
    fibButton.addEventListener("click", fibClick); // Gives the button an event
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(newList);
    body.appendChild(piButton);
}

var piClick = function() {
    var c = document.createElement('li');
    num = array.pop();
    var piTerm = 0; 
    c.innerHTML += 'Term: ' + piTerm + ': '; 
    c.innerHTML += num;
    piTerm++; // Increases the index
    var piList = document.getElementById('piList');
    piList.appendChild(c);
}


addListPi();
var piButton = document.getElementById("piButton");  
fibButton.addEventListener('click', piClick); 	
*/ 
