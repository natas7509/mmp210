/*
Meme v 1
by Jon
10.2.2018
conditional logic
mmp 210 week 5 

*/

var SPimg;
var eyesImg; /*activate for next submission*/
var randyImg;
var copImg
var laughingImg
var x = 0;
var ellipse;

function preload() {
    SPimg = loadImage("SP-drunk-imgV-3.jpg");
    eyesImg = loadImage("eyes.png");
    randyImg = loadImage("randy-1.png");
    copImg = loadImage("cop.png");
    laughingImg = loadImage("laughing.png");
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





            textSize(60);
            textFont("Trebuchet MS");
            fill('white');
            //            text("Hi problem,", width/2, height/10);
            textSize(55);
            fill('white');
            text("dad!!", 120, 480);

        } 


        else if (mouseY < 300) {
            image(copImg, 120, 0);
            image( eyesImg, -4, -70, width, height);



            textSize(60);
            textFont("Trebuchet MS");
            fill('white');
            //            text("Hi problem,", width/2, height/10);
            textSize(57);
            fill('white');
            text("I'm outa here!", 270, 520);



        }



        else   {

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