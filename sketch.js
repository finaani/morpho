// assign variables for each functions that'll be used.
// A World of morphos that morph through out life
// The more they eat, they grow and longer they survive
// The longer they survive, the more likely they are to reproduce new phases in their life
// The bigger they are, the more changes to them
// The bigger they are, the slower they are to change often
// When the morphos die, new morphos are left behind


var drawing = true


// creation of our morphos
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 0;
var yBallChange = 0;

// paddle waddle away
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;
var score = score++;
let playerColor; // color changes


let player; // main player
let world;

let playerX = 300;
let food;
let playerY = 385;
let morphX = 300;
let morphY = 200;
let iX = 0;
let iY = 0;

var cx =100;
var cy = 100;
var cr= 100;
var speed = 5;
var easing = 0.1;

var targetX = cx;
var targetY = cy;





let playerShape; // this will have the shapes change shapes everytime it hits the ball
let shapes = ["square", "ellipse"]



function setup() { // this a setup for the window frame.
  frameRate = 2
  createCanvas(windowWidth, windowHeight);

  // this changes the shapes colors everytime its reloaded
  playerColor = color(random(255), random(255), random(255))
  playerShape = random(shapes);


  // morpho world starts with 20 morphos
  // and 20 pieces of food

}



//--------------draw begin ----------


function draw() {
  background(0);
  foodShow()
  playerShow()
  keyPressed()
  foodUpdate()
  death()
  scorePrint()









  //morpho bounce off paddle
  if ((xBall > xPaddle &&
      xBall < xPaddle + paddleWidth) &&
    (yBall + (diameter / 2) >= yPaddle)) {
    xBallChange *= -1;
    yBallChange *= -1;
  }


  // paddle true or false
  if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight - 100;
    started = true;


  }


  // design for paddles
  fill(0, 255, 255);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

}



// death is for when player hits the edges and the screen goes red. inttially should also say "you lost"
function death() {
  if (playerX > 590) {
    background(200, 40, 50)
    print("You lost!")
  }
  if (playerX < 10) {
    background(200, 40, 50)
    print("You lost!")

  }
  if (playerY < 10) {
    background(200, 40, 50)
    print("You lost!")

  }
  if (playerY > 390) {
    background(200, 40, 50)
    print("You lost!")

  }


  if (mouseIsPressed) {
      fill(255);
      noStroke();
      ellipse(mouseX, mouseY, 50, 50);
      fill(0,203,108)
      rect(mouseX, mouseY, 70, 70)

    } else {
     fill(50, 168, 166);
    noStroke();
      ellipse(mouseX, mouseY, 50, 50);
    }

}
// --------- draw ends ---------


function mousePressed(){


targetX= mouseX;
  targetY= mouseY;
}



// player show shows the player that catches the ball.
function playerShow() {
  fill(playerColor); // goes back to color change in player
  noStroke();
  ellipseMode(CENTER)

  // for loop is for shapes to change when loses. We are trying to make it change without replaying game.
  if (playerShape == "ellipse") {

    ellipse(playerX, playerY, 25);

  } else if (playerShape == "square") {

    rect(playerX, playerY, 25, 25)

  }

}

// keyPressed is for the arrow keys that allows player move across screen easily.
function keyPressed() {

  if (keyCode === UP_ARROW) {
    iX = 0;
    iY = -4;
    playerX = playerX + iX;
    playerY = playerY + iY;
  } else if (keyCode === DOWN_ARROW) {
    iX = 0;
    iY = 4;
    playerX = playerX + iX;
    playerY = playerY + iY;
  } else if (keyCode === RIGHT_ARROW) {
    iY = 0;
    iX = 4;
    playerX = playerX + iX;
    playerY = playerY + iY;
  } else if (keyCode === LEFT_ARROW) {
    iY = 0;
    iX = -4;
    playerX = playerX + iX;
    playerY = playerY + iY;
  } else if (key === 'a' && xPaddle > 0) {
    xPaddle -= 50;
  } else if (key === 'd' && xPaddle < width - paddleWidth) {
    xPaddle += 50;
  }

}



function foodShow() {
  let a = random(0, 255);
  let b = random(0, 255);
  let c = random(0, 255);
  fill(a, b, c)
  noStroke()
  ellipseMode(CENTER)
  ellipse(morphX, morphY, 10)


}


function foodUpdate() {
  let d = dist(playerX, playerY, morphX, morphY)
  if (d < 15) {
    foodX = random(10, 590);
    foodY = random(10, 390);
    print("+" + score)
  }

}

function scorePrint() {
  let d = dist(playerX, playerY, morphX, morphY)

  if (d < 15) {
    score++
  }




  function foodUpdate() {
    let d = dist(playerX, playerY, morphX, morphY)
    if (d < 15) {
      foodX = random(10, 590);
      foodY = random(10, 390);
      print("+" + score)
    }

  }

  function scorePrint() {
    let d = dist(playerX, playerY, morphX, morphY)

    if (d < 15) {
      score++
    }


  }


}
