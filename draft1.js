let ocean;
let sky;
let hedges;
let disco;

let circum = 0;
let flightspeed = 0.0001;
let radius = 1000;

//let gullz = [];
let gull0;
let gull1;
let gull2;
let gull3;
let gull4;
let gull5;
let gull6;

function preload(){
  ocean = loadImage("ocean.jpg");
  sky = loadImage('sky.jpg');
  hedges = loadImage('hedges.jpg');
  disco = loadImage("rainbowdisco.jpg");
  lightz = loadImage("lights.avif");
}

function setup() {
  createCanvas(650, 400, WEBGL);

  //gullz[0] = new GULL
  gull0 = new GULL(0,-60,-800);
  gull1 = new GULL(100,-20,-400);
  gull2 = new GULL(-100,-20,-400)
  gull3 = new GULL(-150,20,0);
  gull4 = new GULL(150,20,0);
  gull5 = new GULL(-200,40,200);
  gull6 = new GULL(200,40,200);

  
}

function draw() {
  background(50);
  ambientLight(255,2000,2000,0);
  
 // wall();

  
  gull0.displayGULL();
  gull0.moveGULL();
  gull1.displayGULL();
  gull1.moveGULL();
  gull2.displayGULL();
  gull2.moveGULL();
  gull3.displayGULL();
  gull3.moveGULL();
  gull4.displayGULL();
  gull4.moveGULL();
  gull5.displayGULL();
  gull5.moveGULL();
  gull6.displayGULL();
  gull6.moveGULL();

  earth();
  orbitControl(4,4);

}

function wall(){
  push();
  noStroke();
  translate(0,200,-1000);
  texture(ocean);
  //ambientMaterial(0,255,0);
  plane(2000,1500);
  pop();
}

function earth() {
  push();
  noStroke();
  //fill(0,180,190);
  //ambientMaterial(100,255,255);
  texture(hedges);
  translate(0,height+520);
  sphere(900,24,24);
  pop();
  
}

 class GULL{
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.zspeed = -1;
    this.yspeed = 1;
  }


displayGULL(){
  push();
  fill(255);

  translate(this.x,this.y,this.z);
  strokeWeight(1);
  noStroke();
  //head&body
  ellipse(0,-3.5,12,10);
  ellipse(0,0,12,11);
  ellipse(0,-4,18,6);
   //tail
  triangle(0,-5,-7,+8,+7,+8);
  //rightwing
  beginShape();
  vertex(+5,0);
  quadraticVertex(+10,-18,+70,0);
  quadraticVertex(+14,-6,+5,0);
  endShape();
  //leftwing
  beginShape();
  vertex(-5,0);
  quadraticVertex(-10,-18,-70,0);
  quadraticVertex(-14,-6,-5,0);
  endShape();
  pop();
  }

 moveGULL() {
  // this.z = this.z+this.zspeed;
  // this.y = this.y+this.yspeed;
  push();
  angleMode(RADIUS);
  circum += flightspeed;
  //circum = circum % 30;
  let birdPos = map(circum,0,30,0,60*PI);
  this.y = cos(birdPos) *radius;
  this.z = sin(birdPos)*radius;
  pop();

 }

}
  
//}

// function tilt(){
//     rotateY(angle);
//   angle += 100;
// }
