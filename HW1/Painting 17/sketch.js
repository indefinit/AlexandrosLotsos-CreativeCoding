//define canvas variable for centering
var cnv;
//define diagonal line constants for 3rd and 4th sections
/**
 * Kevin's notes: a shorthand when declaring many variables at once 
 * is to use commas instead of semi-colons.  
 * You could try something like this:
 * 
 * var x01 = 450,
 *  y01 = 50,
    x11 = 600,
    y11 = 200,
    x02 = 800,
    y02 = 50,
    x12 = 650,
    y12 = 200;
 */
var x01 = 450; var y01 = 50; //upper left corner 3rd segment
var x11 = 600; var y11 = 200; //lower right corner 3rd segment
var x02 = 800; var y02 = 50; //upper right corner 4th segment
var x12 = 650; var y12 = 200; //lower left corner 4th segment

function setup() {
  cnv = createCanvas(850,250);
  centerCanvas();
  background(0);
  stroke(255);

}

function draw() {
  //draw the first vertical line part
  for(var i = 50; i <= 200; i += 5){
    line(i, 50, i, 200);
  }
  
  //leave 50px margin
  
  //draw the second horizontal line part
  for(var i = 50; i <= 200; i += 5){
    line(250, i, 400, i);
  }
  
  //leave 50px margin
  
  //draw third diagonal line part
  for(var i = 0; i <= 30; i++){
    line(x01, y01 + 5*i, x01 + 5*i, y01);
    line(x11, y11 - 5*i, x11 - 5*i, y11);
  }
  
  //leave 50px margin
  
  //draw fourth diagonal line part
  for(var i = 0; i <= 30; i++){
    line(x02, y02 + 5*i, x02 - 5*i, y02);
    line(x12 + 5*i, y12, x12, y12 - 5*i);
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
