const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Hero, ground
var bg
var backgroundImg
function preload() {

  getTime();

}

function setup() {
  createCanvas(1100, 500);

    engine = Engine.create();
    world = engine.world;

  Hero = new hero(100,100,25)
  ground = new Ground(500, 450, 1000, 20)
  monster=new Monster(950,350,100)
  
  box1 = new Box(750, 100, 50, 50)
  box2 = new Box(750, 300, 50, 50)
  box3 = new Box(750, 200, 50, 50)
  box4 = new Box(750, 250, 50, 50)
  box5 = new Box(750, 350, 50, 50)

  box6 = new Box(650, 50, 50, 50)
  box7 = new Box(650, 100, 50, 50)
  box8 = new Box(650, 150, 50, 50)
  box9 = new Box(650, 200, 50, 50)
  box10 = new Box(650, 250, 50, 50)
  box11 = new Box(650, 300, 50, 50)
 // box12 = new Box(650, 350, 50, 50)

  box12 = new Box(550, 50, 50, 50)
  box13 = new Box(550, 100, 50, 50)
  box14 = new Box(550, 150, 50, 50)
  box15 = new Box(550, 200, 50, 50)
  box16 = new Box(550, 250, 50, 50)
  box17 = new Box(550, 300, 50, 50)
  box18 = new Box(550, 350, 50, 50)
        
  string=new Rope(Hero.body,{x:500,y:50})
      
}

function draw() {
  if (backgroundImg) {
        background(backgroundImg)
  }
textSize(20)
text("Drag The Mouse To Move The Hero",375,50)
  Engine.update(engine);
  Hero.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  //box19.display();

  monster.display();
  string.display();
}
 

function mouseDragged() {
  Matter.Body.setPosition(Hero.body,{x:mouseX,y:mouseY})
}

async function getTime() {
    var response= await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    console.log("response"+responseJSON)
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(10,13)
    if (hour>=06 && hour<=19) {
        bg = "gamingbackground1.jpg"
    } else {
        bg="gamingbackground2.png"
    }
    backgroundImg=loadImage(bg)
}