/*
Meme v 3
by Jon
10.22.2018
Animation
mmp 210 week 7

*/

var copBackImg;
var canavasImg;
var eyesImg; 
var randyImg;
var stanX = 160; 
var stanY = 480;
var copImg;
var laughingImg;
var redEyesImg;
var x = 0;
var CopX = 120;
var CopY = 0;
var copBackImgX = 180;
var copBackImgY = 30;
var s = 200;
var TowlieX = -55;
var TowlieY = 200;
var VomitX = 40;
var VomitY = -50;
var r = 255;
var c = 20;
var speed = 3;



function preload() {
    copBackImg = loadImage("copBack.png");
    canvasImg = loadImage("SP-drunk-img.jpg");
    eyesImg = loadImage("eyes.png");
    randyImg = loadImage("randy.png");
    copImg = loadImage("cop.png");
    redEyesImg = loadImage("towelie.png");
}


function setup() {

    createCanvas (650, 550);
}
function draw() {

    background(233);
    fill(255);
//    noTint();
    image(canvasImg, 0, 0);
    image( copBackImg, copBackImgX, copBackImgY);

    if (mouseIsPressed){
        /*CopHatClicked*/

        if 	(mouseX > width/2 && mouseY < height/2) {
            image(canvasImg, 0, 0);
            image(copImg, CopX, CopY);
            CopX += random(-4, 4);
            CopY += random(2, 7);

            image( eyesImg, -4, -70, width, height);


            textSize(55);
            textFont("Trebuchet MS");
            fill(r, 200, 0);

            text("I'm outa here!", 270, 500);
            r += c;
            if (r > 255 || r < 0)

            {
                c *= -1;
            }



        } else if (mouseX < width/2 && mouseY > height/2) {

            /*StansMouthClicked*/


            image(randyImg,VomitX, VomitY, width, height);
            VomitX += random(-3, 3);
            VomitY += random(-1, 1);
            textSize(40);
            textFont("Trebuchet MS");
            fill('white');
            text("Oh Gross!!", stanX, stanY);
            //            stanX += random(-2, 2);
            //            stanY += random(3, -3);
            stanX += speed;

            if (stanX > 161) {
                stanX = 154;
            }
        }
    

        /*Towelie-Comment*/

        if (mouseX < width/2 && mouseY < height/2) {
            image(canvas, 0, 0);


            image(redEyesImg, TowlieX, TowlieY ,width/2, height/2);

            TowlieX += random(-2, 2);
            TowlieY += random(-2, 2);
            textFont("Trebuchet MS");
            textSize(40);
            fill('white');

            push();

            translate(width/2, height/2);
            var morph = frameCount / 260 * PI;
            shearX(morph);

            text('That was close!',100, 200);

            pop();

        }


        /*RandysMouthClicked*/

        else if (mouseX > width/2 && mouseY > height/2)  {

            textAlign(CENTER, CENTER); 
            stroke('black');
            strokeWeight (5);
            textSize(60);
            textFont("Trebuchet MS");
            fill('white');
            text("Hi problem,", width/2, height/10);
            textSize(46);
            fill('white');

            text(" what seems to be the officer?", width/2, 500);



        }  



    }




}