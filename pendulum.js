class Bob {
    constructor(x,y,r) {
         var options={
        isStatic:false,
       restitution:1.1, 
       friction:0, 
       density:1.2 
   } 
   this.x=x;
    this.y=y;
    this.r=r;
     
     this.body=Bodies.circle(this.x, this.y, this.r, options) 
     World.add(world, this.body); 
   } 
   display(){
       var bobpos=this.body.position;
        push(); 
        ellipseMode(CENTER) 
        strokeWeight(0);
         fill(255,0,255);
        ellipse(bobpos.x, bobpos.y,2*this.r, 2*this.r);
            pop() ;
           } 
       }