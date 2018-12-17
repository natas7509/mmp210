/*
Final Project
by Jon
12.17.2018
RetroSoccerGame
mmp 210 FinalWeek

*/


//background
var grass;
var grassX = 0;
var grassY = 60;
var grassH = 620;

// Soccer Img
var soccerBall;
var ballX = 50;
var ballY = 500;

//goal
var goal;
var goalX = 120;
var goalY = 40;

// Goalie
var goalie;
var goalieX = 140;
var goalieY = 100;
var goalieW = 50;
var goalieH = 75;

// Gaolie Speed
var goalieSpeed = 7;

// Soccer boy1
var SoccerBoy1;
var SoccerBoy1X = -300;
var SoccerBoy1Y = 3;

//happy soccer boy
var happyBoy;
var happyBoyX = -48;
var happyBoyY = 400;

//cheerleader
var cheerleader;
var cheerleaderY = 10;
var cheerleaderspeed = 5;

//crying
var crying;
var cryingX = -25;
var cryingY = 400;

// Sound
var Crowd;

var Goaaall;
var terribleShot;

//serialInfo
var serial;
var portName = "/dev/cu.usbmodem1411";
var sensorValue;

function preload() {
  soccerBall = loadImage("ball.png");
  goalie = loadImage("goalie.png");
  goal = loadImage("goal.png");
  grass = loadImage("grass.jpg");
  SoccerBoy1 = loadImage("soccer-boy1.png");
  happyBoy = loadImage("beckham.png");
  crying = loadImage("beckham-angry.png");
  cheerleader = loadImage("cheerleader-1.png");
  Crowd = loadSound("Crowd-1.mp3");
  Goaaall = loadSound("GOAAAALL.mp3");
  terribleShot = loadSound("terrible_shot.mp3");
}

function setup() {
  createCanvas(600, 600);

  serial = new p5.SerialPort();
  serial.on("connected", serverConnected);
  serial.on("open", portOpen);
  serial.on("data", serialEvent);
  serial.on("error", serialError);
  serial.on("close", portClose);

  serial.open(portName);

  Crowd.play();
}

function serverConnected() {
  console.log("connected");
}

function portOpen() {
  console.log("port open");
}

function portClose() {
  console.log("port close");
}

function serialError() {
  console.log("error");
}

function serialEvent() {
  var currentString = serial.readLine();
  trim(currentString);
  if (!currentString) {
    return;
  }
  sensorValue = currentString;
}

function draw() {
  background("blue");

  image(grass, grassX, grassY);

  var goalieX = map(sensorValue, 0, 1023, 400, 100);

  // Ball
  image(soccerBall, ballX, ballY, 40, 40);

  //SoccerBoy1
  image(SoccerBoy1, SoccerBoy1X, SoccerBoy1Y);

  var shootSpeed = 25;

  // Keycodes to move ball
  if (keyCode == RIGHT_ARROW) {
    ballX += 5;
  } else if (keyCode == LEFT_ARROW) {
    ballX -= 5;
  } else if (keyCode == UP_ARROW) {
    ballY -= shootSpeed;
  } else if (keyCode == DOWN_ARROW) {
    ballY += 5;
  }

  // Prevents ball x from going off screen
  if (ballX > 500) {
    ballX = 500;
  } else if (ballX < 70) {
    ballX = 70;
  }

  // Prevents ball y from going off screen
  if (ballY < 50) {
    ballY = 50;

    //        shootSpeed = 0;
  } else if (ballY > 525) {
    ballY = 525;
  }

  // 458 140
  if (ballX > 405 && ballY < 80) {
    ballY = ballY + shootSpeed;
    console.log(ballY);
  }

  if (ballY < -10 && ballX < 123) {
    ballY = ballY + shootSpeed;
  }

  // Goalie

  image(goalie, goalieX, goalieY, 120, 100);
  goalieX = goalieX + goalieSpeed;

  if (
    ballX > goalieX &&
    ballX < goalieX + goalieW &&
    ballY > goalieY &&
    ballY < goalieY + goalieH
  ) {
    textSize(32);
    textAlign(CENTER);
    textSize(49);
    text("OMG You're Terrible ! ! !", width / 2, 350);
    image(crying, cryingX, cryingY, 180, 240);
    terribleShot.play();

    noLoop();
  }

  // goal
  image(goal, goalX, goalY, 360, 100);

  // Prevents goalie from going off screen
  if (goalieX > 380 || goalieX < 140) {
    goalieSpeed *= -1;
  }

  /* rect goal */

  var x = 120;
  var y = -30;
  var w = 360;
  var h = 90;
  if (ballX > x && ballX < x + w && ballY > y && ballY < y + h) {
    image(happyBoy, happyBoyX, happyBoyY, 200, 200);
    textSize(32);
    textAlign(CENTER);
    textSize(60);
    text("GOALLL!!!!", width / 2, 350);
    textSize(40);
    textStyle(ITALIC);
    text("Press spacebar to retry", width / 2, height / 1.5);

    Goaaall.play();
    noLoop();
  }
  fill("red");

  image(cheerleader, 7, cheerleaderY);
  image(cheerleader, 450, cheerleaderY);

  cheerleaderY += cheerleaderspeed;

  if (cheerleaderY > 20 || cheerleaderY < 10) {
    cheerleaderspeed *= -1;
  }
}

function keyPressed() {
  if (keyCode == 32) {
    location.reload();
    console.log(keyCode);
  }
}
