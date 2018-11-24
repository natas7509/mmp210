/*
Final-project-Presentation
by Jon
11.15.2018
rough draft
mmp 210 week 11

*/
/*
    final project presentation slides
*/
var slide = 0;

var bird, fish;
var potentiometer;
var button;
var framework;
var retro;
var coverImg;
var arrow;
var arrowLeft;

function preload() {
    potentiometer = loadImage("potentiometer.jpg");
    button = loadImage("button.jpg");
    framework = loadImage("framework.png");
    retro = loadImage("retro.jpeg");
    coverImg = loadImage("slide-0-retro.jpg");
    arrow = loadImage("black-arrow.png");
    arrowLeft = loadImage("black-arrow left.png");

}   

function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('roboto');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);

    if (slide == 0) {
        image(coverImg,0, 40);
        image(arrow,735, 410);
       

        /*Sensor Graphics*/
    } else if (slide == 1) {
        textSize(30);
        text("potentiometer", 150, 80);
        textSize(13);
        text("(for player movement or ball speed)", 150, 150);

        text("kick button", 150, 300);
        image(potentiometer,300, 100);
        image(button, 300, 300);
        image(arrow,735, 410);
        image(arrowLeft,10, 410);


        /*framework*/
    } else if (slide == 2) {
        textSize(18);
        text("framework", 375, 20);
        image(framework, 150, 0);
        image(arrow,735, 410);
        image(arrowLeft,10, 410);
        
        /*retro*/
    } else if (slide == 3) {
        text("retro option", 375, 20);
        image(retro,180, 40);
        image(arrowLeft,10, 410);

    }



}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}

////sound examples//
//var chickens;
//var coin;
//var music;
//
//var x = 100;
//var y = 100;
//var s = 100;
//var r = 0;
//var g = 0;
//var b = 0;
//
//function preload() {
//    chickens = loadSound("chickens.mp3");
//    
//    function draw() {
//          background('yellow');
//    } else background('green')
//           }
//        fill(r, g, b, );
//        ellipse(x, y, s);
//    
//    var vol = map(mouseY, 0, height, 1, 0);
//    music.setVolume(vol);
//    
////    var pan = map(mouseX, 0, width, -1, 1);
////    music.pan(pan);
//    
//    var rate = map(mouseX, 0, width, 0.1, 3);
//    music.rate(rate);
//        
//    }
//    
//   
//    
//    //look for p5 sound under libraries//
//}
//
//function mousePressed() {
//    if chickens.isPlaying()) {
//       chickens.pause();
//    } else {
//    chickens.play();
//}
//var d = dist(x,y mouseX, mouseY);
//if (d < s/2) {
//    
//    r = (255);
//    g = (255);
//    b = (255);
//    coin.play();
//}




 





