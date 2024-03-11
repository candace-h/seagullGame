
let wallAngleX = 0;
let earthAngleX = 0;
let ocean; // will be assigned to images
let sky;
let hedges;
let disco;
let lightz;
let sunset;
let moon;
let stars;
let blueflowers;
let orangeflowers;
let wallArray = []; // array of images
let earthArray = []; 
let theme; // sets the index of the wall and earth arrays
let gull0;
let gull1;
let gull2;
let gull3;
let gull4;
let gull5;
let gull6;
let gullArray = [];


function preload(){
    ocean = loadImage("ocean.jpg");
    sky = loadImage('sky.jpg');
    hedges = loadImage('hedges.jpg');
    disco = loadImage("rainbowdisco.jpg");
    lightz = loadImage("lights.avif");
    sunset = loadImage("pinksunset.jpg");
    moon = loadImage('moon2.webp');
    stars = loadImage('stars4.jpg');
    blueflowers = loadImage('blueflowers.jpg')
    orangeflowers = loadImage('flowers.jpg')
}

function setup() {
    createCanvas(650, 400, WEBGL);
    wallArray = [sky,sunset,lightz,stars,orangeflowers];
    earthArray = [hedges,ocean,disco,moon,blueflowers];
    gull0 = new GULL(0,-20,-800);
    gull1 = new GULL(100,-0,-400);
    gull2 = new GULL(-100,-0,-400)
    gull3 = new GULL(-150,20,0);
    gull4 = new GULL(150,20,0);
    gull5 = new GULL(-200,40,200);
    gull6 = new GULL(200,40,200);
    gullArray = [gull0,gull1,gull2,gull3,gull4,gull5,gull6];
  }

  function draw() {
    background(100);
    theme = 1; // to do -set index to rotary encoder 
    translate(0,height+450,0);
    for (let g = 0; g < gullArray.length; g++){
        gullArray[g].displayGULL();
    }
    wall();
    earth();
    orbitControl(4,4);
  }

  function wall(){
    rotateX(wallAngleX);
    push();
    noStroke();
    translate(0,200,-1000);
    texture(wallArray[theme]);
    sphere(4000,24,24);
    pop();
    wallAngleX -= 0.001;
  }

  function earth() {
    rotateX(earthAngleX);
    noStroke();
    texture(earthArray[theme]);
    sphere(900,24,24);
    earthAngleX -= 0.004;
  }
  
  class GULL{
    constructor(x,y,z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

  displayGULL(){
    push();
    fill(255);
    translate(this.x,this.y,this.z);
    translate(0,-950,400);
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
}