class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("square.png");
        World.add(world, this.body);
        this.Visiblity= 255;
      }
     


display(){
  
  if(this.body.speed < 3){
    push();
    translate(this.body.position.x, this.body.position.y);
    
    imageMode(CENTER);
    image(this.image, 0, 0, 65,65);
    pop();
  }
  else{
    push();

    World.remove(world, this.body);
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 65, 65);
    pop();
  }
  
}

score(){
  if (this.Visiblity<0&&this.Visiblity>-100){
    score++;
  }

  

}





        
 
};