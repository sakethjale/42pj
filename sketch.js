var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
  spcimg = loadImage("spacecraft1.png");

  spcimg1 = loadImage("spacecraft2.png");
  spcimg2= loadImage("spacecraft3.png");
  spcimg3= loadImage("spacecraft4.png");
}
function setup() {
  canvas=createCanvas(600, 350);
  canvas.position(300,125)
  spacecraft = createSprite(290,240);
  spacecraft.addImage(spcimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(335,148);
  iss.addImage(issimg);
  iss.scale = 0.90;
spacecraft.debug=false
spacecraft.setCollider("circle",0,-100,100)

  ab=createSprite(273,165,10,10)
  ab.visible=false
}0
function draw() {
  background(bg);
  
  spacecraft.addImage(spcimg);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -4;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spcimg3);
    spacecraft.x = spacecraft.x - 4;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spcimg2);
    spacecraft.x = spacecraft.x +4;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spcimg1);
      
   

  }
}
  if(ab.isTouching(spacecraft)){


   
    textSize(25);
    fill("red")
    text("Docking Successful!", 200, 300);

    hasDocked = true;
  }
  console.log(mouseX,mouseY)
  drawSprites();
}