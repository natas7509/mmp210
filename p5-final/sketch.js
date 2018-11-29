//goal
var goal;
var goalX = 120;
var goalY = 40;
//background
var grass;
var grassX = 0;
var grassY = 60;
var grassH = 620;

// Soccer Img
var soccerBall;
var ballX = 60;
var ballY = 500;

// Goalie 
var goalie;
var goalieX = 140;
var goalieY = 100;
//var goalieW = 50;
//var goalieH = 75;

// Gaolie Speed
var goalieSpeed = 9;

// Soccer boy1
var SoccerBoy1;
var SoccerBoy1X = -300;
var SoccerBoy1Y = 3;
// Sound 
var crowd;



function preload() {
    soccerBall = loadImage('ball.png')
    goalie = loadImage('goalie.png')
    goal = loadImage('goal.png')
    grass = loadImage('grass.jpg')
    SoccerBoy1 = loadImage('soccer-boy1.png')
    crowd = loadSound("crowd.mp3")





}

function setup () {
    createCanvas(600, 600);


}

function draw () {

    background("blue");
    image(grass, grassX, grassY);
//    crowd.playMode("restart");
    crowd.play();



    // Ball
    image(soccerBall, ballX, ballY, 40, 40);

    //SoccerBoy1
    image(SoccerBoy1,SoccerBoy1X ,SoccerBoy1Y);





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

    } else if (ballX < 70) {

        ballX = 70;
    }

    // Prevents ball y from going off screen
    if(ballY < 35) {
        ballY = 35;

    } else if (ballY > 525) {

        ballY = 525;
    }


    // Goalie
    //    rect(goalieX, goalieY, goalieW, goalieH);
    image( goalie, goalieX, goalieY, 120, 100);
    goalieX = goalieX + goalieSpeed;
    // goal
    image( goal, goalX, goalY, 360, 100);


    // can try to make collision using this

    // if (ballX > goalieX && ballX < goalieX + goalieW && ballY > goalieY && ballY < goalieY + goalieH) {
    //  r = random(0, 255);
    //  g = random(0, 255);
    // b = random(0, 255);
    // fill(r, g, b);
    // }


    // Prevents goalie from going off screen
    if (goalieX > 380 || goalieX < 140) {
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
