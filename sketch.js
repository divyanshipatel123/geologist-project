const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1,iron2,rubber1,stone1,stone2,stone3,rubber2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron1 = new Iron(900,580,120,100);
    iron2 = new Iron(500,100,80,80);

    rubber1= new Rubber(280,580,50);
    rubber2=new Rubber(580,50,100)

    stone1 = new Stone(200,100,30,30);
    stone2 = new Stone(300, 50,50,70);
    stone3 = new Stone(800,580,20,30);
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    stone1.display();

    iron1.display();
    iron2.display();

    rubber2.display();
    rubber1.display();

    stone2.display();
    stone3.display();
    
 
}