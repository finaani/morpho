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

 }
 function mousePressed() {
   var spr = createSprite(width/2, height/2,
     random(10, 50), random(10, 50));
   spr.shapeColor = color(255);
   spr.velocity.y = random(3);
   spr.velocity.x = random(-3, 3);
   spr.position.x = mouseX;
   spr.position.y = mouseY;
   spr.friction = 0.995;
   spr.life = 120;
 }


}
