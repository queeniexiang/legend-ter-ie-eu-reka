var index = 8;

var addElement = function() {
    var element = "<li>" + "item " + index + "</li>";
    index++;
    var c = document.getElementById("thelist");
    c.innerHTML += element;
    return element;
    //console.log(element);
}

var removeElement = function() {

}

var changeHeading = function(x) {
  var h = document.getElementById("h");
  h.innerHTML = x;
  console.log(x);
}

var b = document.getElementById("b");
b.addEventListener('click', function(){console.log(addElement());});

/*
var t = document.getElementById("thelist");
t.onmouseover = function() {changeHeading(t);};
*/ 
