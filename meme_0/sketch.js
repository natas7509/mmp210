/*
Meme v 0
by Jon
10.2.2018
rough draft
mmp 210 week 5 

*/

var SPimg;
var eyesImg;

function preload() {
	SPimg = loadImage("SP-drunk-img.jpg");
    eyesImg = loadImage("eyes.png");
}


function setup() {
    
    createCanvas (550, 550);
}
function draw(){
	


    background(233);
    
    fill(255);
   
    noTint();
    image(SPimg, -300, 0);

    tint(255, 0, 255);
//    image(eyesImg,mouseX, mouseY);
   
    image( eyesImg, 60, 100, mouseX, mouseY);
    
//	image( eyesImg, 0, 0, width, height);
//	tint(0, 255, 255, 127);
	
   
   
    textAlign(CENTER, CENTER);
    textSize(40);
    textFont("Trebuchet MS");
    fill('white');
    text("Hi problem,", width/2, height/20);
    fill('red');
    text(" what seems to be the officer?", width/2, 520);
}