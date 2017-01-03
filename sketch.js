var angle = 0;
var i = 1000;
var randomWeight = 40;
var slider;
var cs = new ColorState();
var fps = 1;
function setup() {
  createCanvas(920, 480); //un peu plus du quart d'un écran Full HD
  frameRate(fps);
  angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
  fpsSlider = createSlider(0, 60, 1);
}
function getColorDisplacement(r,g,b){

}
function draw() {
  background(51);
  angle = angleSlider.value();
  fps = fpsSlider.value();
  frameRate(fps);
  stroke(255);
  translate(width/2, height);
  i++;
  if(i>fps){
    i=0;
    cs.computeNewRandomTarget();
  }else{
    cs.computeNextStep();
  }
    branch(150,60,cs.rCurrent,cs.gCurrent,cs.bCurrent);
}

function branch(len,wid,r,g,b) {
  line(0, 0, 0, -len);
  fill(r,g,b);
  rect(-wid/2, 0, wid, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67, wid*0.67,r+random(randomWeight),g+random(randomWeight),b+random(randomWeight));
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67, wid*0.67,r+random(randomWeight),g+random(randomWeight),b+random(randomWeight));
    pop();
  }
}
