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
var ballX = 50;
var ballY = 500;

// Goalie 
var goalie;
var goalieX = 140;
var goalieY = 100;
//var goalieW = 50;
//var goalieH = 75;

// Goalie Speed
var goalieSpeed = 7;

// Soccer boy1
var SoccerBoy1;
var SoccerBoy1X = -300;
var SoccerBoy1Y = 3;
// Sound 
var Crowd;
//var mouseX;
//var mouseY;
var r, g, b;

var Goaaall;


function preload() {
    soccerBall = loadImage('ball.png')
    goalie = loadImage('goalie.png')
    goal = loadImage('goal.png')
    grass = loadImage('grass.jpg')
    SoccerBoy1 = loadImage('soccer-boy1.png')
    Crowd = loadSound('Crowd-1.mp3')
    Goaaall = loadSound('GOAAAALL.mp3')
    


}

function setup () {
    createCanvas(600, 600);
    
    
  
    Crowd.play();
//    Goaaall.play();  
    
      
        


}

function draw () {

    background("blue");


    image(grass, grassX, grassY);
    



    // Ball
    image(soccerBall, ballX, ballY, 40, 40);

    //SoccerBoy1
    image(SoccerBoy1,SoccerBoy1X ,SoccerBoy1Y);


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
    if(ballX > 500) {
        ballX = 500;

    } else if (ballX < 70) {

        ballX = 70;
    }

    // Prevents ball y from going off screen
    if(ballY < 50) {
        ballY = 50;
        
//        shootSpeed = 0;


    } else if (ballY > 525) {

        ballY = 525;
    }  
//    console.log(mouseX, mouseY);


    // 458 140
    if(ballY < 140 && ballX > 440) {
        
        ballY = ballY + shootSpeed; 
        console.log(ballY)
    } 
    
    if(ballY < -10 && ballX < 123) {
        
        ballY = ballY + shootSpeed; 
//        console.log(ballY)
    }



    // Goalie
    //    rect(goalieX, goalieY, goalieW, goalieH);
    image( goalie, goalieX, goalieY, 120, 100);
    goalieX = goalieX + goalieSpeed;
    // goal
    image( goal, goalX, goalY, 360, 100);

//    fill(r, g, b);
//    ellipse(50, 30, 100, 100);



    // can try to make collision using this

    //     if (ballX > goalX && ballX < goalX + goalieW && ballY > goalieY && ballY < goalieY + goalieH) {
    //      r = random(0, 255);
    //      g = random(0, 255);
    //     b = random(0, 255);
    //     fill(r, g, b);
    //     }


    // Prevents goalie from going off screen
    if (goalieX > 380 || goalieX < 140) {
        goalieSpeed *= -1;
    }
    
    
    /* rect goal */
    
    var x = 120;
    var y = -30;
    var w = 360;
    var h = 90;
    if ( ballX > x && ballX < x + w && ballY > y && ballY < y + h ) {
//        fill('red');
        
        textSize(32);
        textAlign(CENTER);
        text('GOALLL!!!!', width/2, height/2);
        text('Press spacebar to retry', width/2, 350);
        Goaaall.play();
      
//        noLoop();
        
    
    } else {
        noFill();
        
        
    }
    
    fill('red');
   stroke('red'); 
   

}



// Ball movement Toggle
var isDrawing = true;
function keyPressed() {
    
    if(keyCode == 32) {
        location.reload();
    }
    
}
    



    






