// legend-ter-ie-eu-reka: Terry Guan, Queenie Xiang, Eugene Thomas
// SoftDev1 pd7
// HW#16: Electric Boogaloo
// 2017-12-11

var index = 8; // The counter for how many elements there are in the list.

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

var fibonacci = function(n) {

    if (n == 0) {
        return 0;
    }
    if (n < 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};


var addList = function() {
    var newList = document.createElement('ol');
    newList.setAttribute("id", "fibList"); 
    var fibButton = document.createElement('button');
    fibButton.setAttribute("id", "fibButton"); 
    fibButton.innerHTML = "Fib Button";
    fibButton.addEventListener("click", fibClick);
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(newList);
    body.appendChild(fibButton);
}

var fibClick = function() {
    index = 0; 
    var newLi = document.createElement('li');
    var fibNum = fibonacci(index); 
    newLi.innerHTML += 'Term: ' + index + fibNum;
    index++;
    var fibList = document.getElementById("fibList");
    fibList.appendChild(newLi);
    
    
}



addList(); 

