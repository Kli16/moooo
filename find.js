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
  return Math.sqrt((x0-x1)**2 + (y0-y1)**2);
};

var findIt = function(e) {
  var dist = distance(targetX, targetY, e.x, e.y);
  var maxdist = distance(Math.max(targetX, boxWidth - targetX), Math.max(targetY, boxHeight - targetY));
  var shade = (255 * (dist/maxdist));
  box.style.background = "rgb(" + shade + ",0,0)";
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
