var Engine=Matter.Engine
var World=Matter.World
var Bodies=Matter.Bodies
var particles=[]
var plinkos=[]
var division=[]
var divisionheight=300
var score=0
function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world
  //ground=new Ground(width/2, height, width, 20)
  for (var i=0;i<=width;i=i+80){
    division.push(new Divisions(i,height-divisionheight/2, 10, divisionheight))
  }
for (var j=75;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75))
}
for (var j=50;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
}
for (var j=75;j<=width;j=j+50){
  plinkos.push(new Plinko(j,275))
}
for (var j=50;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,375))
}
}

function draw() {
  background(0,0,0);  
Engine.update(engine)
//ground.display()
for (var i=0;i<plinkos.length;i++){
  plinkos[i].display()
}
if (frameCount%60==0){
  particles.push(new Particle(random(width/2-30,width/2+30), 10, 10))
  score++
}
for (var j=0;j<particles.length;j++){
  particles[j].display()
}
for (var i=0;i<Divisions.length;i++){
  divisions[i].display()
}
}