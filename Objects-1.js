// This is how you approach object oriented programing


// This is called the "Factory" function
function Vector(x,y) {
    return {
        x:x,
        y:y,

        dist: function () {  return (this.x**2 + this.y**2)**0.5 ;}
    }
    
}

let v=Vector(1,0);

v.y=5;

console.log(v);
console.log(v.dist());



// This is called the "Constructor" function
function Complex(x,y) {
    this.x=x;
    this.y=y;

    // you can declare private variables with "let" olny accesible via methods
    let  tmp = {t1:0,t2:0};
    this.print = function () {console.log ( tmp ); }


    this.abs = function () {  return (this.x**2 + this.y**2)**0.5 ;}
}
// here "new" creates a new empty object (ie {}) and then the function returns "this"
let z= new Complex(1,2);

console.log(z);
console.log(z.abs());
 // 

// Objects are references. So you can do something like
for(let key in z){
    if(typeof z[key]!="function") {console.log(key,'=',z[key]);}
    else{
        if(key != "print" ){console.log(key,'=',z[key]()  );}
        else{z[key]();}

    }
}
// So objects are like an augmented dictionary, with keys
let Ckeys=Object.keys(new Complex(0,0));
console.log(Ckeys);





// Be careful that Objects are copied by reference!
if(false){    
    let w=z;
    // changing w you change z!!
    w.x=0;
    console.log(z,w);
}




// BTW, JS knows the differemce between factiry and constructor function:)
if (false) {
    console.log(v.constructor);// this is a generic object (yeah, functions are objects)
    console.log(z.constructor);// this is really a Complex
    // ------------------------------------------------------------------
}




