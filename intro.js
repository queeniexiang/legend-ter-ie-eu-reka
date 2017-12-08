var index = 8;

var addElement = function() {
    var element = "<li>" + "item " + index + "</li>";
    index++;
    return element; 
    //console.log(element);
}

var b = document.getElementById("thelist");
var e = addElement(); 
b.innerHTML += e;



