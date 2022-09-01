class Ball{

constructor(x,y){

var ballOptions;
ballOptions = {

   isStatic : false,
   restitution : 0.3,
   friction : 0,
   density : 1.2 
    
}
   
   this.r = 30; 

   this.body = Bodies.circle(x,y,this.r,ballOptions);
   World.add(world,this.body);
}

display(){

ellipse(this.x,this.y,this.r,ballOptions);

}

}