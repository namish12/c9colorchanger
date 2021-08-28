var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

/*btn_red = createButton("RED");
btn_red.position(100,50);
btn_red.mousePressed(red_bg);

btn_green = createButton("GREEN");
btn_green.position(250,50);
btn_green.mousePressed(green_bg);

*/
}

/*function red_bg()
{
 r = 255;
 b = 0;
 g = 0;
}

function green_bg()
{
 r = 0;
 b = 0;
 g = 255;
}
 */ 

function draw() 
{
  background("black");
  
  if(keyDown("up")){
    //box.y = box.y - 5;
    background("red");
  }

  if(keyDown("down")){
    //box.y = box.y + 5;
    background("blue");
  }

  if(keyDown("right")){
    //box.x = box.x + 5;
    background("green");
  }

  if(keyDown("left")){
    //box.x = box.x - 5;
    background("yellow");
  }
  
  drawSprites();
}



