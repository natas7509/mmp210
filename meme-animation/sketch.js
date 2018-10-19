/*
Meme v 1
by Jon
10.2.2018
conditional logic
mmp 210 week 5 

*/
var copBackImg;
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
var VomitX = 40;
var VomitY = -50;
var r = 255;
var c = 20;



function preload() {
    copBackImg = loadImage("copBack.png");
    SPimg = loadImage("SP-V3-Fill.jpg");
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
     image(copBackImg, 180, 26);
//    image(copBackImg, 180, 26);
//    image(SPfillImg,0,0);




    if (mouseIsPressed){
        /*CopHatClicked*/


        if 	(mouseX > width/2 && mouseY < height/2) {
            image(SPimg, 0, 0);
            image(copImg, CopX, CopY);
            CopX += random(-4, 4);
            CopY += random(2, 7);

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
               

            image(randyImg,VomitX, VomitY, width, height);

            VomitX += random(-3, 3);
            VomitY += random(-3, 3);
            textSize(40);
            textFont("Trebuchet MS");
            fill('white');
            text("Oh Gross!!", 100, 480);
        }






        /*Towelie-Comment*/

        if (mouseX < width/2 && mouseY < height/2) {
               image(SPimg, 0, 0);
                         

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
                image(copBackImg, 180, 26);
            
            
            textAlign(CENTER, CENTER);     
            textSize(60);
            textFont("Trebuchet MS");
            fill('white');
            text("Hi problem,", width/2, height/10);
            textSize(46);
            fill('white');
            text(" what seems to be the officer?", width/2, 500);



        }  
//        else (mouseX < width/2 && mouseY < height/2) 
//               image(SPimg, 0, 0);
        
    }
    
                         


}