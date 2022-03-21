var ps = [];
var r = 1;
var attractors = [];

function setup() {
  createCanvas(900, 900);
  background(0);
  stroke(255,50);
  strokeWeight(2);
  /*
  for(var i = 0; i < 10; i++){
    ps.push(new Particle(random(width), random(height)));
  }
  */
  /*
    for(var j = 0; j < 10; j++){
    attractors.push(createVector(random(width),random(height)));
    }
  */
}

function mousePressed(){
  attractors.push(createVector(mouseX,mouseY));
  ps.push(new Particle(mouseX,mouseY));
  stroke(random(255),0,random(255),100);
}



function draw() {
  //background(0);
 // draw the attractors
    for(var j = 0; j < attractors.length; j++){
      //stroke(0,200,0);
      strokeWeight(1);
      point(attractors[j].x, attractors[j].y);
    }
//
  for(var i = 0; i < ps.length; i++){
    var p = ps[i];
    
    for(var j = 0; j < attractors.length; j++){
      p.attracted(attractors[j]);
    }
   
    ps[i].update();
    ps[i].show();
    
    

    
    //ps[i].attracted(attractors[j]);
  }
  


}






function Particle(x,y){
  
  this.pos = createVector(x,y);
  this.prev = createVector(x,y);
  this.acc = createVector();
  this.vel = createVector();
  //this.vel.setMag(random(2,5));
  
  this.update = function(){
    this.vel = this.vel.add(this.acc);
    this.pos = this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  
  this.show = function(){
    //stroke(255,50);
    point(this.pos.x, this.pos.y);
    line(this.pos.x,this.pos.y, this.prev.x,this.prev.y);
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
    
  }
  
  
  this.attracted = function(target){
    var force = p5.Vector.sub(target, this.pos);
    var dsquared = force.magSq();
    dsquared = constrain(dsquared, 1,100);
    
    var G = 1;
    
    var strength = G/dsquared;
    force.setMag(strength);
    //force.mult(1.1);
    this.acc.add(force);
  }
}