// Object:

let Vector={
    x:0,
    y:0,

    dist: function () { return (this.x**2 + this.y**2)**0.5 ;}
}
 
let Xval=[0 , 1 , 3];
let Yval=[-2 , 5 , 7];




for (let i = 0; i < Xval.length; i++) {
    // use this
    Vector.x=Xval[i];
    Vector.x++;
    // or this
    Vector['y']=Yval[i];
    Vector['y']++;

    console.log(Vector);

    console.log( Vector.dist() );

    
}




