// assign variables for each functions that'll be used.

let player; // main player

let playerX = 300;
let playerY = 385;
let morphX = 300;
let morphY = 200;
let iX = 0;
let iY = 0;
let score = 1;
let playerColor; // color changes

let playerShape; // this will have the shapes change shapes everytime it hits the ball
let shapes = ["square", "ellipse"]

function setup() { // this a setup for the window frame.
  frameRate = 2
  createCanvas(windowWidth, windowHeight);

  // this changes the shapes colors everytime its reloaded
  playerColor = color(random(255), random(255), random(255))
  playerShape = random(shapes);


}

function draw() {
  background(0);
  foodShow()
  playerShow()
  keyPressed()
  foodUpdate()
  death()
  scorePrint()


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
  playerX = playerX + iX;
  playerY = playerY + iY;
  if (keyCode === UP_ARROW) {
    iX = 0;
    iY = -4;
  }
  if (keyCode === DOWN_ARROW) {
    iX = 0;
    iY = 4;
  }
  if (keyCode === RIGHT_ARROW) {
    iY = 0;
    iX = 4;
  }
  if (keyCode === LEFT_ARROW) {
    iY = 0;
    iX = -4;
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





}
