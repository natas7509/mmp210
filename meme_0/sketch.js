/*
Meme v 0
by Jon
10.2.2018
rough draft
mmp 210 week 5 


*/

var SPimg;
//var eyesImg; /*activate for next submission*/
//var x =100;
//var y =100;
//var s =100;
function preload() {
	SPimg = loadImage("SP-drunk-imgV-3.jpg");
//    eyesImg = loadImage("eyes.png");
}


function setup() {
    
    createCanvas (650, 550);
}
function draw(){
	


    background(233);
    
    fill(255);
    
//    	ellipse(x, y, s);
//	x += 2;
//	y += 2;
//	s += 2;
//	if (x > width) {
//		x = 0;
//	}
//	if (y > height) {
//		y = 0;
//	}
   
    noTint();
    image(SPimg, 0, 0);

    tint(255, 0, 255);
//    image(eyesImg,mouseX, mouseY);
   
//    image( eyesImg, 60, 100, mouseX, mouseY);
    
//	image( eyesImg, 0, 0, width, height);
//	tint(0, 255, 255, 127);
	
   
   
    textAlign(CENTER, CENTER);
    textSize(45);
    textFont("Trebuchet MS");
    fill('white');
    text("Hi problem,", width/2, height/20);
    fill('white');
    text(" what seems to be the officer?", width/2, 520);
}