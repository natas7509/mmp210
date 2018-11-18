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
    bird = loadImage("bird.jpg");
    fish = loadImage("fish.jpg");
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
    textFont('monospace');
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
        image(framework, 150, 40);
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
