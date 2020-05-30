const canvas = document.getElementById('C1');
const ctx = canvas.getContext('2d');

width=canvas.width;
height=canvas.height;

class rect{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }

}



ctx.fillStyle = 'rgb(100, 100, 100)';
ctx.fillRect(width/2. , height/2., 5, 5);
