
//autor Taboada obregon 
window.onload = function(){

//Canvas Setting
var canvas = document.querySelector("canvas");
canvas.width= window.innerWidth;
canvas.height = window.innerHeight/2;
var c = canvas.getContext("2d");
y = window.innerHeight/2 ;
x = window.innerWidth;

function Circle(a,b,dx,dy, r,f){
    this.a = a;
    this.b = b;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.f = f;
    
    this.draw = function(){
      c.beginPath();
      c.arc(this.a,this.b,this.r,0, Math.PI * 2, false);
      c.fillStyle = this.f;
      c.fill();
    }
    this.update = function(){
       if (this.a+r>x || this.a-r<0){
          this.dx = -this.dx;
       }
       if (this.b+r>y || this.b-r <0){
          this.dy = -this.dy;
       }
       this.a += this.dx;
       this.b += this.dy;
       this.draw();
    }
}

var circleArray = [];
var color = ["red","green", "blue","pink","purple","yellow","aqua","orange"];

 for (var i =0; i < 8; i++){
   var a = Math.random()*(x-20)+10;
   var b = Math.random()*(y-20)+10;
   var dx = (Math.random()-0.5)*12;
   var dy = (Math.random()-0.5)*12;
   var r = 10;
   var f = color[i];
   circleArray.push(new Circle(a,b,dx,dy,r,f));
 }
 
//animation part
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,x,y);
    
    for (var i = 0; i< 8; i++){
        circleArray[i].update();
    }
    
  }
animate();
}