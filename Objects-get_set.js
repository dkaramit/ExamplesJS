// assume you have an object and you need to define properties that invole callong (say) private variables. 
// You can use  Object.defineProperty!
function TestObj(x,y) {
    this.x=x;
    this.y=y;

    // you can declare private variables with "let" olny accesible via methods
    let  T = {t1:0,t2:0};

    let Z=T;
    // Object.defineProperties gets an object (in our case it's "this") its property ("T")
    // and another object that does something.  
    Object.defineProperty(this, "T",{  get: function() {return T;}    } )
    
}



// Now you have access to the private T
let TObj= new TestObj(0,1);
// You can see this because you used Object.defineProperty
console.log(TObj.T);
// You can't see this, although it is the same as T!
console.log(TObj.Z);


// What does this "get" do, then?


// "get" is a getter, and can be used to define functions inside objects as properties
// Observe that the getter cannot take arguments. If you neeed to pass arguments you use the setter ("set").
let obj={
    a:[0,1,2],
    get show(){  return this.a ; },
    set put(x){  this.a.push(x) ; }
    
    
};

console.log(obj.show); // not obj.show()!!
//  since "show" returns a, we can use it to change a!

obj.show.push(555); // this is the same as obj.a.push(555), because "show" returns a!
console.log(obj.show);


// this does nothing, since obj.a remains the same
// obj.show = null  ;
// console.log(obj.show);


// if you want to do something useful with "=", you use the "set" which works like: 
obj.put=0;
console.log(obj.a);
