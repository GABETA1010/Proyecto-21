class Ground{
    constructor(x,y,width,height){

    var groundOptions;
    groundOptions = {
        isStatic : true
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,groundOptions);

    }

    display(){
    
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height,groundOptions);
    fill("yellow");

    }
}