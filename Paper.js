class Paper{
constructor(x,y,r){
var options={
isStatic:false,    
restitution:0.3,
friction:0,
density:1.2
}
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.rectangle(this.x, this.y, (this.r-40)/2,(this.r-40)/2, options);
this.image=loadImage("paper.png")
World.add(world, this.body);
}

display(){
var paperpos=this.body.position;

//push()
imageMode(CENTER)
fill('Yellow')

//ellipse(paperpos.x,paperpos.y, this.width,this.body,this.height)

image(this.image,paperpos.x,paperpos.y,100.50)
//pop()


}



}