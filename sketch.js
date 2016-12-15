var angle = 0;
var slider;
function setup() {
  createCanvas(920, 480); //un peu plus du quart d'un écran Full HD

  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(width/2, height);
  branch(150,60);
}
function branch(len,wid) {
  line(0, 0, 0, -len);
  fill('green');
  rect(-wid/2, 0, wid, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67, wid*0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67, wid*0.67);
    pop();
  }
}
