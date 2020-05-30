// You can define objects using class

class Complex{
    constructor(x,y){ 
        this.x=x;
        this.y=y; 
    }

    abs() { return Math.sqrt(this.x**2 + this.y**2) ;}
    arg() { return Math.atan2(this.y,this.x);  }
}

let z = new Complex(1,1);

console.log( z.arg()  );
console.log( Math.PI/4.  );

