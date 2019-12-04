let player;

let playerX = 300;
let playerY = 385;
let morphX = 300;
let morphY = 200;
let iX = 0;
let iY = 0;
let score = 1;



function setup() {
  frameRate = 1
  createCanvas(800, 400);

}

function draw() {
  background(0,203,108);
  foodShow()
  playerShow()
  keyPressed()
  foodUpdate()
  death()
  scorePrint()


}

  function death(){
    if(playerX > 590){
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
    if(playerY > 390){
      background (200,40,50)
            print("You lost!")

       }





  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);



  }

  for (let i = 0; i < 2; i++) {
    horses[i] = new Sprite(animation, 0, i * 75, random(0.1, 0.4));
  }
}

function draw() {
  background(0);
  var circleX = random(width);
var circleY = random(height);
var circleSize = random(10, 100);
fill(random(255), random(255), random(255));
ellipse(circleX, circleY, circleSize)

function foodShow() {
    let a = random(0,255);
  let b = random(0,255);
  let c = random(0,255);
  fill(a,b,c)
  noStroke()
  ellipseMode(CENTER)
  ellipse(morphX, morphY, 10)


}


function foodUpdate() {
  let d = dist(playerX, playerY, morphX, morphY)
  if (d < 15) {
    foodX = random(10, 590);
    foodY = random(10, 390);
    print("+"+score)
  }

  }

function scorePrint (){
    let d = dist(playerX, playerY, morphX, morphY)

    if (d < 15) {
    score++
  }





}
