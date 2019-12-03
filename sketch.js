var spr;


function setup() {
  createCanvas(800, 400);


  spr = createSprite(
    width/2, height/2, 40, 40);
  spr.shapeColor = color(255);




}




function draw() {
  background(50);
  spr.velocity.x = (mouseX - spr.position.x) * 0.2;
  spr.velocity.y = (mouseY - spr.position.y) * 0.2;
  drawSprites();


  fill(255);
   noStroke();
   textSize(72);
   textAlign(CENTER, CENTER);
   if (score < 10) {
     text(score, width/2, height/2);
   }
   else {
     text("you win!", width/2, height/2);
   }
 }
 function removeAndScore() {
   score += 1;
   this.remove();
 }

 }

 for (var i = 0; i < allSprites.length; i++) {
    // gravity
    allSprites[i].addSpeed(0.1, 90);
    if (allSprites[i].position.y > height) {
      allSprites[i].velocity.y *= -1;
    }
    // any code that removes sprites should be
    // the *last* thing in the loop!
    if (allSprites[i].position.x > width ||
        allSprites[i].position.x < 0) {
      allSprites[i].remove();
    }
  }
  textAlign(RIGHT, TOP);
  text("sprite count: " + allSprites.length,
    width-10, 10);
  drawSprites();
}
function mousePressed() {
  var spr = createSprite(width/2, height/2,
    random(10, 50), random(10, 50));
  spr.shapeColor = color(255);
  spr.velocity.y = random(3);
  spr.velocity.x = random(-3, 3);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
}


}
