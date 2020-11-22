
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bind = Matter.Constraint;

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
  world = engine.world;

  dust = new Ground(400,700,200,600);
  dust2 = new Ground(670,600,300,600);

  ball = new wall(320,410,30);
  ball1 = new wall(350,410,30);
  ball2 = new wall(380,410,30);
  ball3 = new wall(410,410,30);
  ball4 = new wall(440,410,30);
  ball5 = new wall(470,410,30);

  wall1 = new wall(320,380,30);
  wall2 = new wall(350,380,30);
  wall3 = new wall(380,380,30);
  wall4 = new wall(410,380,30);
  wall5 = new wall(455,380,60);

  wall6 = new wall(335,350,60);
  wall7 = new wall(470,350,30);
  wall8 = new wall(320,330,30);
  wall9 = new wall(410,330,150);

  wal = new wall(540,290,30);
  wal2 = new wall(570,290,30);
  wal3 = new wall(600,290,30);
  wal4 = new wall(630,290,30);
  wal5 = new wall(660,290,30);
  wal6 = new wall(540,260,30);
  wal7 = new wall(570,260,30);
  wal8 = new wall(600,260,30);
  wal9 = new wall(630,260,30);
  wal10= new wall(660,260,30);
  wal11 = new wall(540,230,30);
  wal12 = new wall(570,230,30);
  wal13 = new wall(600,230,30);
  wal14 = new wall(630,230,30);
  wal15 = new wall(660,230,30);
  wal16 = new wall(540,200,30);
  wal17 = new wall(570,200,30);
  wal18 = new wall(600,200,30);
  wal19 = new wall(630,200,30);
  wal20 = new wall(660,200,30);

  block = new stone();

  shoot = new sling(block.rock,{x:150,y:200});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background("black");

  dust.earth();
  dust2.earth();

  ball.block();
  ball1.block();
  ball2.block();
  ball3.block();
  ball4.block();
  ball5.block();

  console.log(ball.wall.speed);

  wall1.block();
  wall2.block();
  wall3.block();
  wall4.block();
  wall5.block();
  wall6.block();
  wall7.block();
  wall8.block();
  wall9.block();

  wal.block();
  wal2.block();
  wal3.block();
  wal4.block();
  wal5.block();
  wal6.block();
  wal7.block();
  wal8.block();
  wal9.block();
  wal10.block();
  wal11.block();
  wal12.block();
  wal13.block();
  wal14.block();
  wal15.block();
  wal16.block();
  wal17.block();
  wal18.block();
  wal19.block();
  wal20.block();

  block.show();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(block.rock,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  shoot.detach();
}
function keyPressed(){
  if(keyCode === 8){
    shoot.attach(block.rock);
  }
}
