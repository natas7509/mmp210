// Soccer Img
var soccerBall;
var ballX = 100;
var ballY = 450;

// Goalie 
var goalieX = 100;
var goalieY = 100;
var goalieW = 100;
var goalieH = 150;

// Gaolie Speed
var goalieSpeed = 3;

function preload() {
    soccerBall = loadImage('ball.png')
}

function setup () {
    createCanvas(600, 600);
}

function draw () {
    background("black");

 // Ball
    image(soccerBall, ballX, ballY, 100, 100);

 // Keycodes to move ball
    if (keyCode == RIGHT_ARROW) {
        ballX += 5;
    } else if (keyCode == LEFT_ARROW) {
        ballX -= 5;
    } else if (keyCode == UP_ARROW) {
        ballY -= 25;
    } else if (keyCode == DOWN_ARROW) {
        ballY += 5;
    }

 // Prevents ball x from going off screen
    if(ballX > 500) {
        ballX = 500;

    } else if (ballX < 0) {

        ballX = 0;
    }

 // Prevents ball y from going off screen
    if(ballY < 0) {
        ballY = 0;

    } else if (ballY > 500) {

        ballY = 500;
    }

 // Goalie
    rect(goalieX, goalieY, goalieW, goalieH);
    goalieX = goalieX + goalieSpeed;


 // can try to make collision using this

 // if (ballX > goalieX && ballX < goalieX + goalieW && ballY > goalieY && ballY < goalieY + goalieH) {
    //  r = random(0, 255);
    //  g = random(0, 255);
 // b = random(0, 255);
 // fill(r, g, b);
    // }


 // Prevents goalie from going off screen
    if (goalieX > 450 || goalieX < 50) {
        goalieSpeed *= -1;
    }
}

// Ball movement Toggle
var isDrawing = true;
function keyPressed() {
    if (keyCode === ENTER) {

        if(isDrawing) {
            noLoop();
        } else {
            loop();
        }

        isDrawing = !isDrawing
    }
}
