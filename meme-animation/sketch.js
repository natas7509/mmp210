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


    if (mouseX < width/2 && mouseY < height/2) {

        image(redEyesImg, TowlieX, TowlieY ,width/2, height/2);
        TowlieX += 2;
        TowlieY += 2;
        s += 2;
        if ( redEyesImg > TowlieX, TowlieY ,width/2, height/2) {
            TowlieX = 0;
        }
        if (TowlieY > height) {
            TowlieY = 0;
        }
         textFont("Trebuchet MS");
            textSize(40);
            fill('white');
            text("That was close!", 170, 500);
           

    }


    if (mouseIsPressed){
        /*CopHatClicked*/
        if 	(mouseX > width/2 && mouseY < height/2) {
            image(copImg, 120, 0);
            image( eyesImg, -4, -70, width, height);
            textSize(40);
            textFont("Trebuchet MS");
            fill('white');
            text("I'm outa here!", 410, 460);







        } else if (mouseX < width/2 && mouseY > height/2) {

            /*StansMouthClicked*/
            image(randyImg,40, -50, width, height);
            textSize(40);
            textFont("Trebuchet MS");
            fill('white');
            text("Oh Gross!!", 100, 480);




            /*Towelie-Comment*/

        } else if (mouseX < width/2 && mouseY < height/2) {


            image(copImg, 120, 0);
           


            /*RandysMouthClicked*/

        }

        else  {

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