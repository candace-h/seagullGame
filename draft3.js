let wallAngleX = 0;
let earthAngleX = 0;
let scaledAngleX;
let yRotate = 0;
let scaledAngleY;
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
let themeControl;
let gull0;
let gull1;
let gull2;
let gull3;
let gull4;
let gull5;
let gull6;
let gullArray = [];
let serial;
let latestData = "waiting for data";  // you'll use this to write incoming data to the canvas
let pot1;
let pot4;
let pot5;
let stringArray;


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

    serial = new p5.SerialPort();
    serial.list();
    serial.open("COM5");
    serial.on('connected', serverConnected);
    serial.on('list', gotList);
    serial.on('data', gotData);
    serial.on('error', gotError);
    serial.on('open', gotOpen);
    serial.on('close', gotClose);
}

function setup() {
  //  serial = new p5.SerialPort();
  //   serial.list();
  //   serial.open("COM5");
  //   serial.on('connected', serverConnected);
  //   serial.on('list', gotList);
  //   serial.on('data', gotData);
  //   serial.on('error', gotError);
  //   serial.on('open', gotOpen);
  //   serial.on('close', gotClose);

    createCanvas(650,400, WEBGL);
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

function serverConnected() {
    print("Connected to Server");
  }

function gotList(thelist) {
    print("List of Serial Ports:");
    // theList is an array of their names
    for (let i = 0; i < thelist.length; i++) {
      // Display in the console
      print(i + " " + thelist[i]);
    }
  }

function gotOpen() {
    print("Serial Port is Open");
  }
function gotClose(){
    print("Serial Port is Closed");
    latestData = "Serial Port is Closed";
}

function gotError(theerror) {
    print(theerror);
  }

function gotData() {
  let currentString = serial.readLine();  // read the incoming string
  // if(currentString != undefined){
   // console.log(currentString);
   if (!currentString) return;             // if the string is empty, do no more
     trim(currentString);                    // remove any trailing whitespace
     latestData = currentString; 
   
  //console.log(currentString);

    stringArray = currentString.split(",");
    pot1 = stringArray[0];
    console.log("yellow = ", pot1);
    pot4 = stringArray[1];
    console.log("white = ", pot4);
    pot5 = stringArray[2];
    console.log("red = ", pot5);
    }

  function gotRawData(thedata) {
    print("gotRawData" + thedata);
  }

  function draw() {
    background(100);
    themeSelect();
    translate(0,height+450,0);
    for (let g = 0; g < gullArray.length; g++){
        gullArray[g].displayGULL();
      }

    wall();
    earth();
    orbitControl(4,4);
  }
  function themeSelect() {
    themeControl = Math.floor(pot4 / 204) ;
    console.log("themeC",themeControl);
    theme = themeControl; // to do -set index to rotary encoder 
  }

  function wall(){
    push();
    rotateX(wallAngleX);
    rotateY(yRotate);
    scaledAngleX = pot1 / 400000;
    scaledAngleY = pot5 / 400000 - 0.003;
   // console.log("scaled angle", scaledAngleX);
    noStroke();
    translate(0,200,-1000);
    texture(wallArray[theme]);
    sphere(4000,24,24);
    wallAngleX -= scaledAngleX;
    yRotate -= scaledAngleY;
    pop();

  }

  function earth() {
    push();
    rotateX(earthAngleX*2);
    rotateY(yRotate);
    scaledAngleX = pot1 / 100000;
    scaledAngleY = pot5 /100000 - 0.003;
    noStroke();
    texture(earthArray[theme]);
    sphere(900,24,24);
    earthAngleX -= scaledAngleX;
    yRotate -= scaledAngleY;
    pop();
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







