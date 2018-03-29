function preload() {
  for (i=1; i<22; i++) {
    img[i] = loadImage("Pictures/reaction"+i+".png")
  }
  for (i=0; i<7; i++) {
    reac[i] = loadImage("Pictures/reac" + i + ".png")
  }
  for (i=0; i < 8; i++) {
    mol[i] = loadImage("Pictures/mol" + i + ".png");
  }

}

function setup() {
  createCanvas(800,600);
  runner = new Runner();

  timer = setTimeout(function() {
    start = true;
  }, 3000)
}

var jumping = l = r = false;
var img = [];
var reac = [];
var levels = [];
for (i=2; i<9; i++) {
  levels[i] = false;
}
var pass = [3, 2, 2, 1, 3, 1, 2];
var mol = [];
var start = false;
var currentHeight = 0;
var pastHeight = 0;
var x = 0;
var fast = prompt("How fast are you? (1-3)")


function keyPressed() {
  if (jumping == false && keyCode == UP_ARROW) {
    var jump = createVector(0,-15);
    runner.applyForce(jump);
    jumping = true;
  } else if (l == false && keyCode == LEFT_ARROW) {
    var left = createVector(-8, 0);
    runner.applyForce(left);
    r = false;
  } else if (r == false && keyCode == RIGHT_ARROW) {
    var right = createVector(8, 0);
    runner.applyForce(right);
    l = false;
  }
}

function draw() {
  background(51);

  var gravity = createVector(0, 0.5);
  runner.applyForce(gravity);

  for (i = 0; i < levels.length-2; i++) {
    if (runner.pos.y <= 430-i*200 && runner.pos.x < pass[i]*200+50 && runner.pos.x > pass[i]*200-50) {
      levels[i+2] = true
    }
  }

  // dictates which reactant appears in the bottom right corner
  for (i = 0; i < 7; i++) {
    if (runner.pos.y < 630-i*200) {
      image(reac[i], width-20-379/4, height-20-124/4, 379/2, 124/2)
    }
  }
{  // if (runner.pos.y < 380){
  //   level2 = true;
  // }
  // if (runner.pos.y < 180) {
  //   level3 = true;
  // }
  // if (runner.pos.y < -20) {
  //   level4 = true;
  // }
  // if (runner.pos.y < -220) {
  //   level5 = true;
  // }
  // if (runner.pos.y < -420) {
  //   level6 = true;
  // }
  // if (runner.pos.y < -620) {
  //   level7 = true;
  // }
  // if (runner.pos.y < -220) {
  //   level5 = true;
  // }
  // if (runner.pos.y < -420) {
  //   level6 = true;
  // }
  // if (runner.pos.y < -620) {
  //   level7 = true;
  // }
}

  x = frameCount;
  // Translates the page up every time.
  // translate(0, -runner.pos.y+400);
  if (start == true) {
    currentHeight = -height+225+x; // how much the screen is translated by
    translate(0, currentHeight*fast*3/4);
  } else if (start == false && runner.pos.y > 0) { // before screen starts moving
    translate(0, -height+225+3*60); //
  } else {
    translate(0, currentHeight);
  }

  // Level Panels
  fill(200);
  for (i = 1; i < levels.length; i++) {
    rect(0, 800-200*i, width, 20);
  }

  // Reaction Mechanisms for each level
  for (i = 1; i < 22; i++) {
    imageMode(CENTER);
    image(img[i], (width/4)+(i%3)*(width/4), 400-200*Math.floor((i-1)/3), 379/3, 124/3);
  }

  console.log(runner.pos.y, currentHeight-200)
  runner.update();
  runner.edges();
  runner.display();
}
