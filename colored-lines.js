function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 10; x < width-10; x = x + 10) {
    line(x, height/2, mouseX, mouseY);
		colorMode(HSB, 200);
		var c = color(x / 2.2, 255, 255);
		stroke(c);
  }
}
