'use strict';

import {Polygon} from './polygon.js';

class Square extends Polygon{
  constructor(side){
    super(4, side, side);
    this._side = side;
  }
}

class Triangule extends Polygon{
  constructor(base, height){
    super(3, base, height);
    this._base = base;
    this._height = height;
  }
  
  area (){
    return super.area()/2;
  }
}

const newSquare = new Square (4);
const newTriangle = new Triangule(4,3);

console.log('Prueba');
console.log(newSquare.perimeter());
console.log(newSquare.area());

console.log(newTriangle.perimeter());
console.log(newTriangle.area());
