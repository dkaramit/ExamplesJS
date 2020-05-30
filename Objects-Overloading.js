// There is no overloading in JS... You can only do things like

function Complex(x,y) {
    this.x=x;
    this.y=y;
    // BTW another way to define function (like a lambda in c++ ? ) 
    this.abs = ()=> {  return Math.sqrt(this.x**2 + this.y**2) ;}
}

Complex.prototype ["add"] = function(z){
    return new Complex(this.x+ z.x , this.y+ z.y) ;
}

Complex.prototype ["mul"] = function(z){
    return new Complex(this.x * z.x ,  - this.y * z.y) ;
}

// you can also do something like this...
Complex.prototype ["*"] = function(z){
    return new Complex(this.x * z.x ,  - this.y * z.y) ;
}

let z1= new Complex(2,1);
let z2= new Complex(-5,3);

console.log(z1.add(z2));
console.log(z1.mul(z2));

console.log(z1.mul(z2).mul(z2) );
console.log((z1)["*"](z2)["*"](z2)  );
 