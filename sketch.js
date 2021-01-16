var myPhysics, myMap;
var ground, ball;

function setup(){
    createCanvas(400,400);
    myPhysics = Matter.Engine.create();
    myMap = myPhysics.world;

    var ground_options ={
        isStatic: true
    }

    ground = Matter.Bodies.rectangle(200,390,200,20,ground_options);
    Matter.World.add(myMap,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Matter.Bodies.circle(200,100,20, ball_options);
    Matter.World.add(myMap,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Matter.Engine.update(myPhysics);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}