function ColorState(r=125,g=125,b=125){
  this.rCurrent = r;
  this.gCurrent = g;
  this.bCurrent = b;
  this.rBase = r;
  this.gBase = g;
  this.bBase = b;
  this.computeNewRandomTarget = function(){
    this.rTarget = random(255);
    this.rTarget = random(255);
    this.rTarget = random(255);
  }
  this.setNewTarget = function(r,g,b){
    this.rTarget = r;
    this.rTarget = g;
    this.rTarget = b;
  }
  this.computeNextStep = function(fps){
    this.rCurrent += Math.sign(this.rTarget-this.rCurrent)*(this.rTarget-this.rCurrent)/fps;
    this.gCurrent += Math.sign(this.gTarget-this.gCurrent)*(this.gTarget-this.gCurrent)/fps;
    this.bCurrent += Math.sign(this.bTarget-this.bCurrent)*(this.bTarget-this.bCurrent)/fps;
    if(this.rCurrent > 255) this.rCurrent = 220;
    if(this.gCurrent > 255) this.gCurrent = 220;
    if(this.bCurrent > 255) this.bCurrent = 220;
  }
}
