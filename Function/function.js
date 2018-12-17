function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	
	button(200, 200, 100, 'blue');
	button(200, 100, 100, 'red');
	button(100, 300, 20, 'green');
	button(20, 20, 10, 'gold');
	button(300, 300, 50, 'hotpink');
	
}

function button(x, y, s, c) {
	var d = dist(x, y, mouseX, mouseY);
	if (d < s / 2) {
		fill(c); // mouse hover
		s *= 2;
		x += 100;
	} else {
		fill('plum'); // default 
	}
	ellipse(x, y, s);
}
