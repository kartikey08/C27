class Roof{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic: true});
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }

    display(){
        var roofpos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(roofpos .x, roofpos .y, this.width, this.height);
    }
}