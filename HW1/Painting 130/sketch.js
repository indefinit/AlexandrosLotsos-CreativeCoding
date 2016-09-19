//define canvas variable for repositioning
var cnv;
//define canvas width and height
var cnvw = 601;
var cnvh = 601;

function setup() {
  cnv = createCanvas(cnvw,cnvh);
  centerCanvas();
  noFill();
  background(0);
}

function draw() {
  stroke("#FFFF33");
  strokeWeight(2);
  //draw the arcs
  arc(0, 0, 600, 1200, 0, PI/2);
  arc(0, 600, 600, 1200, -PI/2, 0);
  arc(600, 0, 600, 1200, -3*PI/2, -PI/2);
  arc(600,600, 600, 1200, -3*PI/2, -PI/2);
  
  stroke(255);
  strokeWeight(1);
  //draw the grid
  for(var i = 0; i <= cnvh; i += 50){
    line(0, i, 600, i);
    line(i, 0, i, 600);
  }
}

//center canvas method
// source: https://github.com/processing/p5.js/wiki/Positioning-your-canvas
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
function windowResized() {
  centerCanvas();
}