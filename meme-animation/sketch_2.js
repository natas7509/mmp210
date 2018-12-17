/*
Meme v 1
by Jon
10.2.2018
conditional logic
mmp 210 week 5 

*/

var SPimg;
var eyesImg; 
var randyImg;
var copImg;
var laughingImg;
var redEyesImg;
var x = 0;
var CopX = 120;
var CopY = 0;
var s = 200;
var TowlieX = -55;
var TowlieY = 200;
var r = 255;
var c = 20;



function preload() {
    SPimg = loadImage("SP-drunk-imgV-3.jpg");
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

    noTint();
    image(SPimg, 0, 0);




    if (mouseIsPressed){
        /*CopHatClicked*/


        if 	(mouseX > width/2 && mouseY < height/2) {
            image(copImg, CopX, CopY);

            image( eyesImg, -4, -70, width, height);


            textSize(40);
            textFont("Trebuchet MS");
            fill(r, 80, 0);

            text("I'm outa here!", 410, 460);
            r += c;
            if (r > 255 || r < 0)

            {
                c *= -1;
            }






        } else if (mouseX < width/2 && mouseY > height/2) {

            /*StansMouthClicked*/

            image(randyImg,40, -50, width, height);
            textSize(40);
            textFont("Trebuchet MS");
            fill('white');
            text("Oh Gross!!", 100, 480);
        }






        /*Towelie-Comment*/

        if (mouseX < width/2 && mouseY < height/2) {

            image(redEyesImg, TowlieX, TowlieY ,width/2, height/2);
            image(copImg, CopX, CopY);

            TowlieX += random(-5, 5);
            TowlieY += random(-5, 5);
            textFont("Trebuchet MS");
            textSize(40);
            fill('white');
            //            text("That was close!", 170, 500);

        }


        /*RandysMouthClicked*/

        else if (mouseX > width/2 && mouseY > height/2)  {

            textAlign(CENTER, CENTER);     
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