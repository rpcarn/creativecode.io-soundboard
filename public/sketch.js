/** Jacqueline coded this sketch **/
function setup() {
  var canvas=createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 10);
  noStroke();
  fill(255, 70);
  var r = random(20);
  ellipse(random(windowWidth), random(windowHeight), r, r);
}

function mousePressed(){
  background(255);
}
