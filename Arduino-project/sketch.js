/*
analog_input
by Jon
11.6.2018

mmp 210 week 10


*/

var serial;
var portName = "/dev/cu.usbmodem1411";
var sensorValue;



var SPimg;
var text;
var TowlieX;
var TowlieY;
//var eyesImg; /*activate for next submission*/
//var x =100;
//var y =100;
//var s =100;
function preload() {
    SPimg = loadImage("SP-drunk-imgV-3.jpg");
    redEyesImg = loadImage("towelie.png");

}



function setup() {

    createCanvas (650, 550);


    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);

}


function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;





}
function draw(){



    background(233);

    fill(255);




    //    	ellipse(x, y, s);
    //	x += 2;
    //	y += 2;
    //	s += 2;
    //	if (x > width) {
    //		x = 0;
    //	}
    //	if (y > height) {
    //		y = 0;
    //	}

    noTint();
    image(SPimg, 0, 0);
    




    tint(255, 0, 255);
    



    //    var c = map(sensorValue, 0, 1023, 0, 200);
    var x = map(sensorValue, 0, 1023, height, 0);
    var y = map(sensorValue, 0, 1023, height, 430);
    var TowlieX = map(sensorValue, 0, 900, height, 430);
    var TowlieY = map(sensorValue, 0, 1023, height, 200);
    
    image(redEyesImg, TowlieX, TowlieY);


    textAlign(CENTER, CENTER);
    stroke("black");
    strokeWeight(4);
    textFont("Trebuchet MS");
    textSize(47);
    fill('white');
    text("Hi problem,", x, height/20);
    fill('white');
   
    text("what seems  to be the officer?", width/2, y-20);
   
    





}