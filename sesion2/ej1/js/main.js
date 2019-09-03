'use strict';

class Square {
    
    perimeter(long, num){
        console.log(long * num);
    }
    area(num){
        console.log(num * num);
    }
}

const perm = new Square();
const ar = new Square();

perm.perimeter(9,4);
ar.area(9);