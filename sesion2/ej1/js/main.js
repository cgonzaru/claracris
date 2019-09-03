'use strict';

class Square {
    
    perimeter(long, num){
        console.log(long * num);
    }
    area(long){
        console.log(long * long);
    }
}

const perm = new Square();
const ar = new Square();

perm.perimeter(9,4);
ar.area(9);