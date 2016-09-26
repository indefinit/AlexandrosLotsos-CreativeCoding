var cnv;
var cWidth;
var cHeight;

function setup() {
  //set canvas dimensions and fill style
  cWidth = 650;
  cHeight = 0.735*cWidth;
  cnv = createCanvas(cWidth, cHeight);
  centerCanvas();
  noStroke();
  background(1,0,17);
  fill(249,246,239);
  
  translate(-width/32,0);
  
  //begin drawing left outer rhombus
  beginShape();
  vertex(0, 0.5*cHeight); //left vertex
  vertex(0.35*cWidth, 0); //top vertex
  vertex(0.7*cWidth, 0.5*cHeight); //right vertex
  vertex(0.35*cWidth, cHeight); //bot vertex
  endShape(CLOSE);
  
  fill(162,0,13);
  
  //begin drawing left inner rhombus
  beginShape();
  vertex(0.49*cWidth, 0.5*cHeight); //left vertex
  vertex(0.596*cWidth, 0.349*cHeight); //top vertex
  vertex(0.7*cWidth, 0.5*cHeight); //right vertex
  vertex(0.596*cWidth, 0.649*cHeight); //bot vertex
  endShape(CLOSE);
  
  fill(249,246,239);
  translate(width/32,0);
  translate(width/32,0);
  
  //begin drawing right outer rhombus
  beginShape();
  vertex(0.7*cWidth, 0.20*cHeight); //left vertex
  vertex(0.85*cWidth, 0); //top vertex
  vertex(cWidth, 0.20*cHeight); //right vertex
  vertex(0.85*cWidth, 0.4*cHeight); //bot vertex
  endShape(CLOSE);
  
  fill(48,131,41);
  
  //begin drawing right inner rhombus
  beginShape();
  vertex(0.798*cWidth, 0.331*cHeight); //left vertex
  vertex(0.85*cWidth, 0.266*cHeight); //top vertex
  vertex(0.902*cWidth, 0.331*cHeight); //right vertex
  vertex(0.85*cWidth, 0.4*cHeight); //bot vertex
  endShape(CLOSE);
}

function draw() {
  
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