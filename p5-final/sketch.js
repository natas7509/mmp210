/*
self portrait
v1.
by Jon Darling
Hard coded_Interaction
*/
var goalie;
var spr1;
var spr;

function setup() {
    createCanvas(600, 600);
    goalie = new Group();

    spr1 = createSprite(width/2, height/9,
                        270, 100);
    spr1.shapeColor = color('red');
    //    spr1.mouseActive = true;
    spr = createSprite(
        width/12, height/1.2, 40, 40, 40);
    spr.shapeColor = color(255); 

    for (var i = 0; i < 10; i++) {
        var c = createSprite(210, 80, 45, 80)  ;
        c.shapeColor = color(0);
        goalie.add(c);
    }
//    spr3 = createSprite(
//    width/2, height/2, 100, 100);
//  spr3.shapeColor = color(0);
//  spr4 = createSprite(0, 0, 50, 50);
//  spr4.shapeColor = color(128);



}
function draw() {
    background(50);
    for (var i = 0; i < goalie.length; i++) {
        goalie [i].position.x += goalie[i].width * 0.04 ;
        if (goalie[i].position.x > 400) {
            goalie[i].position.x = 200;
        }
//          spr.velocity.x = (mouseX-spr.position.x)*0.2;
//  spr.velocity.y = (mouseY-spr.position.y)*0.1;
  spr.collide(goalie);
        

    }





    if (spr1.mouseIsOver) {
        background(100);
    }
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    text("use arrow keys, or SPACEBAR to stop",
         width/2, height*0.95);

    drawSprites();


}




function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        spr.setSpeed(3.5, 0);

    }

    else if (keyCode == DOWN_ARROW) {
        spr.setSpeed(3.5, 90);
    }
    else if (keyCode == LEFT_ARROW) {
        spr.setSpeed(3.5, 180);
    }
    else if (keyCode == UP_ARROW) {
        spr.setSpeed(3.5, 270);
    }

    else if (key == ' ') {
        spr.setSpeed(0, 0);
    }
    else if (key == 's') {
        spr.setSpeed(10.5, 270);

    }


    return false;









}
