var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

var hue = Math.round(Math.random() * 360);

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );
console.log( "targetX: " + targetX );
console.log( "targetY: " + targetY );


//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return Math.sqrt((x0-x1)**2 + (y0-y1)**2);
};

var findIt = function(e) {
  var dist = distance(targetX, targetY, e.x, e.y);
  var maxdist = distance(Math.max(targetX, boxWidth - targetX), Math.max(targetY, boxHeight - targetY), 0, 0);
  //console.log("dist: " + dist);
  //console.log("maxdist: " + maxdist);
  var shade = 255 - Math.round((255 * (dist/maxdist)));
  var brightness = 100 - Math.round(100 * dist/maxdist);
  //console.log(shade);
  box.style.backgroundColor = "hsl(" + hue + ", 100%, " + brightness  + "%)";
  //console.log(box.style.backgroundColor);
  //box.style.background = "rgb(0, " + shade  + ", 0)";
};

var solved = function(e){
  if (distance(e.x, e.y, targetX, targetY) < 20){
    box.innerHTML = "<h1> congrats. u found the target </h1>"
  }
  else{
    box.innerHTML = "<h1> u have not found the target. </h1>";
  }
}

box.addEventListener("mousemove", findIt);
box.addEventListener("click", solved);
