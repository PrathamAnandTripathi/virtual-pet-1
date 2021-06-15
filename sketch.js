//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
  dogimg=loadImage("images/dogimg.png");
  happyDog=loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(300,300,50,30);
  dog.addImage(dogimg);
 // var dog1 = database.ref('dog');
 // dog1.on("value")
  foodstock=database.ref('food')
  foodstock.on("value",readStock);
}


function draw() {  
  background("255")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    
  }
  drawSprites();
  //add styles here
  textSize (25)
  fill("black")
  stroke(5)
  text("Note: Press UP_ARROW key to feed the dog with Milk",130,30);



}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
database.ref('/').update({
  food:x
})
}
