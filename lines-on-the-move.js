function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);
var r=random(0,100)
	
	
  for (var x = 50; x < width-100; x = x + 10) {
    line(x, width+r / 2, x + 100, width+r / 2 - 400);
  }
}
