/*
Meme v 0
by Jon
10.2.2018
rough draft
mmp 210 week 5 

*/

var img;

function preload() {
	img = loadImage("SP-drunk-img.jpg");
}


function setup() {
    
    createCanvas (550, 550);
}
function draw(){
	


    background(233);
    fill(255);
   
    image(img, -300, 0);
    textAlign(CENTER, CENTER);
    textSize(40);
    textFont("Trebuchet MS");
    fill('white');
    text("Hi problem,", width/2, height/20);
    fill('red');
    text(" what seems to be the officer?", width/2, 520);
}