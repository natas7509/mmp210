/*
self portrait
v1.
by Jon Darling
*/

function setup() {
	createCanvas(640, 450);
}

function draw() {
	background("grey");
    
	noStroke();
   
     // nose
	fill("green");
    ellipse(317, 180,80, 100);
    // mouth
    stroke("black")
    strokeWeight(5)
    
    fill("red")
      arc(315, 300, 250, 200, 0, PI);
//    // mouth 2
//    rect(150,280,100,25,10)

    // eyes
    noStroke();
    fill ("blue")
    ellipse(500, 65, 80);
    ellipse(135, 65, 80);
	
	
	
   
	
   
  
   
    	
	
	
//	//sockets
//	fill("white");
//    rect(30, 20, 200, 88);
//    rect(400, 20, 200, 88);
//    
   
	
    
}


