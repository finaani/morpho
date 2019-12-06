// assign variables for each functions that'll be used.

let player; // main player

let playerX = 300;
let playerY = 385;
let morphX = 300;
let morphY = 200;
let iX = 0;
let iY = 0;
let score = 1;



function setup() {
  frameRate = 1
  createCanvas(windowWidth, windowHeight);

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

  function death(){
    if(playerX > 1400){
      background (200,40,50)
      print("You lost!")
    }
    if(playerX < 10){
   background (200,40,50)
            print("You lost!")

    }
    if(playerY < 10){
   background (200,40,50)
            print("You lost!")

    }
    if(playerY > windowHeight){
      background (200,40,50)
            print("You lost!")

  }
  if (playerY > 390) {
    background(200, 40, 50)
    print("You lost!")

  }




}


// player show shows the player that catches the ball.
function playerShow() {
  fill(200, 20, 40);
  noStroke();
  ellipseMode(CENTER)
  ellipse(playerX, playerY, 25)
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
