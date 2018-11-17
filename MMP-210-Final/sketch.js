/*
Asteroids
by Jon
11.17.2018

mmp 210 Final

*/

var ship;

function setup() {

    createCanvas (windowWidth, windowHeight);
    ship = new ship();
    ship.render
}

function draw() {
    
    background (0);
}

function Ship() {
    
    this.pos = createVector(width/2, height/2);
    this.r = 10;
    
    this.render = function() {
        triangle(-this.r, this.r, this.r,this.r, 0, -this.r);
        
    }
}

   
