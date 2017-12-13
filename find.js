var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var xcor = Math.pow( (x0 - x1), 2);
  var ycor = Math.pow( (y0 - y1), 2);
  return Math.sqrt(xcor + ycor);
};


var findIt = function(e) {
  var currentX = event.clientX;
  var currentY = event.clientY;
  console.log("mouse x: " + currentX + " mouse y: " + currentY);
  var dist = distance(currentX, currentY, targetX, targetY);
  console.log("distance: " + dist);
  dist = Math.floor(255 - dist);
  document.body.style.background = "rgb(" + dist + "," + dist + "," + dist + ")";

};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
