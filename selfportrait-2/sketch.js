/*
self portrait
v1.
by Jon Darling
Hard coded_Interaction
*/





function setup() {
    
	createCanvas(640, 520);
    textSize(20);
}

var s = 10;

var eyeSize = 85;
var mouthSize = 80;

var leftEyeX1 = 175;
var leftEyeY1 = 100;

 









var rightEyeX1 = 450;
var rightEyeY1 = 100;
var WhiteEyeSize = 85;
var leftWhitesEyesX1 = 450;
var leftWhitesEyesY1 = 100;
var leftWhitesEyesX2 = 130;
var rightWhitesEyesX1 = 170;
var rightWhitesEyesY1 = 100;
var rightWhitesEyesX2 = 130;  
var eyebrowsleftX1 = 150;
var eyebrowsleftY1 = 40;
var eyebrowsleftX2 = 140;
var eyebrowsleftY2 = 20;
var eyebrowsRightX1 = 450;
var eyebrowsRightY1 = 15;
var eyebrowsRightX2 = 150;
var eyebrowsRightY2 = 20;
var pupilsRightX1 = 200;
var pupilsRightY1 = 100;
var pupilsRightX2 = 20;
var pupilsRightY2 = 35;
var pupilsLeftX1 = 480;
var pupilsLeftY1 = 100;
var pupilsLeftX2 = 20;
var pupilsLeftY2 = 35;
   
     
    
var noseX1 = 300;
var noseY1 = 110;
var noseX2 = 300;
var noseY2 = 70;
var noseX3 = 330;
var noseY3 = 240;
var nostrilsX1 = 300; 
var nostrilsY1 = 235; 
var nostrilsX2 = 20;
var nostrilsY2 = 10; 
var nostrilsX1r = 344; 
var nostrilsY1r = 233; 
var nostrilsX2r = 25;
var nostrilsY2r = 10;

var mouthShadowX1 = 315;
var mouthShadowY1 = 300;
var mouthShadowX2 = 250;
var mouthShadowY2 = 200;
var mouthRedX1 = 300;
var mouthRedY1 = 300;
var mouthRedX2 = 250;
var mouthRedY2 = 200;

var teethX1 = 300;
var teethY1 = 310;
var teethX2 = 220;
var teethY2 = 100;

var bagsColor = (210);
var bagsLeftX1 = 290;
var bagsLeftY1 = 110;
var bagsLeftX2 = 130;
var bagsLeftY2 = 220;
var bagsLeftX3 = 220;
var bagsLeftY3 = 110;
var bagsRightX1 = 550;
var bagsRightY1 = 200;
var bagsRightX2 = 340;
var bagsRightY2 = 100;
var bagsRightX3 = 400;
var bagsRightY3 = 150;


function draw() {
 
   
      
    // Canvas
	background("#F7F1DA");

    noStroke();
    
     var eyePos = map(mouseX,0,width,-20, 20);
    	
      
    // Facial lines
    
    stroke("black")
    strokeWeight(5)
    
    
	line(40, 120, 40, 20); // two xy coordinates
    line(70, 300, 40, 120); // two xy coordinates
    line(130, 400, 70, 300); // two xy coordinates
    line(130, 400, 280,500); // two xy coordinates
	
     
	line(600, 120, 600, 20); // two xy coordinates
    line(570, 300, 600, 120); // two xy coordinates
    line(510, 400, 570, 300); // two xy coordinates
    line(510, 400, 330,500); // two xy coordinates
    line(328, 500, 280,500); // two xy coordinates
    
    // crows-feet-right
    stroke ("#917A4F")
    strokeWeight(2)
    
    line(60, 110, 90,100); // two xy coordinates
    line(60, 100, 90,100); // two xy coordinates
    line(60, 90, 90,100); // two xy coordinates
    // crows-feet-left
    stroke ("#917A4F")
    strokeWeight(2)
    
    line(590, 90, 560,100); // two xy coordinates
    line(590, 100, 560,100); // two xy coordinates
    line(590, 110, 560,100); // two xy coordinates
   
    
   
     // nose
    
	fill("#917A4F");
    noStroke()
    stroke ("#917A4F");
    line(300, 120, 280, 180);
    stroke ("#917A4F");
    line(330, 120, 360, 180);
   
    noStroke()
    triangle(noseX1, noseY1, noseX2, noseY2,noseX3, noseY3); // three xy coordinates
   
    	
    // nostrils
    fill ("black")
    ellipse (nostrilsX1, nostrilsY1, nostrilsX2, nostrilsY2);
    ellipse (nostrilsX1r, nostrilsY1r, nostrilsX2r, nostrilsY2r);
    fill ("#F7F1DA");
    stroke("#917A4F")
    strokeWeight(1);
    arc(320, 236, 40, 20,0, PI);
    
    
   
    
    

    	
   // mouth
    noStroke()
    fill ("black")
    arc(mouthShadowX1, mouthShadowY1, mouthShadowX2, mouthShadowY2, 0, PI);
    stroke("black")
    strokeWeight(5)
    fill("red")
    arc(mouthRedX1, mouthRedY1, mouthRedX2, mouthRedY2, 0, PI);
   
    mouthShadowX1 = map(mouseX, 0, width, 280, 305);

    
    
   
    // teeth
    
    
    fill ("white")
    arc(teethX1,teethY1, teethX2, teethY2, 0, PI);
    
    //gives the speed of 2 to  teethY1
     teethY1 =  teethY1 + 2 ;
//    
    
    // if  teethY1 is greater than 310....stay at 310
    if ( teethY1 > 320) {
        
       teethY1 = 310;
    }
 // mustache
    noStroke()
   fill("#917A4F");
   
	
    

   
   
      
     // bags
    noStroke()
    fill (bagsColor)
     triangle(bagsLeftX1,bagsLeftY1, bagsLeftX2,bagsLeftY2, bagsLeftX3, bagsLeftY3); // three xy coordinates
     triangle(bagsRightX1, bagsRightY1,bagsRightX2,bagsRightY2, bagsRightX3, bagsRightY3); // three xy coordinates
    
    
    
    // whites eyes
    
    fill ("white")
    stroke("black")
    strokeWeight(.5)
    ellipse (leftWhitesEyesX1, leftWhitesEyesY1, leftWhitesEyesX2, WhiteEyeSize);// left
    ellipse (rightWhitesEyesX1, rightWhitesEyesY1, rightWhitesEyesX2, WhiteEyeSize); // right
    
     // BlueEyes
    
    noStroke();
    fill ("#78A1BB");
    var r = map(mouseX, 0, width, 0, 255); // red 
    var g = map(mouseY,0, height, 0,0); // green
	var b = map(mouseX, 0, width, 225, 0); // blue

	fill(r, g, b);
    var x = width / 2;
	var y = height / 2;
	var s = width / 2;
    
     ellipse(rightEyeX1, rightEyeY1, eyeSize);// right
    ellipse(leftEyeX1,leftEyeY1, eyeSize);// left
    
     
    // eyebrows
    
    noStroke();
    fill ("#917A4F")
    
   
	
    ellipse (eyebrowsRightX1, eyebrowsRightY1, eyebrowsRightX2, eyebrowsRightY2);
    ellipse (eyebrowsleftX1, eyebrowsleftY1, eyebrowsleftX2, eyebrowsleftY2);
    
    //pupils
    
    fill ("black")
    
    pupilsRightX1 = map(mouseX,0, width, 425, 455);
    pupilsLeftX1 = map(mouseX,0, width, 152, 180);
    
    ellipse(pupilsRightX1, pupilsRightY1, pupilsRightX2, pupilsRightY2);// right
	ellipse(pupilsLeftX1, pupilsLeftY1, pupilsLeftX2, pupilsLeftY2);// left
    
    
  
    

   
}

    
    
   
 
    
  
    
    
  
    
   