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
var copImg;
var laughingImg;
var redEyesImg;
var x = 0;
var y = 0;
var s = 100; // size


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

        else  (mouseX > width/2 && mouseY > height/2){

            textAlign(CENTER, CENTER);     
            textSize(60);
            textFont("Trebuchet MS");
            fill('white');
            text("Hi problem,", width/2, height/10);
            textSize(46);
            fill('white');
            text(" what seems to be the officer?", width/2, 500);



        }   

        else if (mouseX < width/2 && mouseY > height/2) {

            /*StansMouthClicked*/
            image(randyImg,40, -50, width, height);


            textSize(60);
            textFont("Trebuchet MS");
            fill('white');
            textSize(55);
            fill('white');
            text("Oh Gross!!", 65, 480);

           






            /*CopHatClicked*/
        } if 	(mouseX > width/2 && mouseY < height/2) {
            image(copImg, 120, 0);
            image( eyesImg, -4, -70, width, height);
            textSize(60);
            textFont("Trebuchet MS");
            fill('white');
            textSize(57);
            fill('white');
            text("I'm outa here!", 270, 520);


            else if (mouseX < width/2 && mouseY < height/2) {

                image(redEyesImg, -55, 200,width/2, height/2);

                textSize(60);
                textFont("Trebuchet MS");
                fill('white');
                textSize(45);
                fill('white');
                text("That was close!", 120, 500);



                /*RandysMouthClicked*/
                
                

            }
        }
    }