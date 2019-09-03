'use strict';
class Square {
  constructor(side, numSide){
    this.side = side;
    this.numSide = numSide;
  }
  perimeter() {
  console.log(this.side * this.numSide)
}
  area (){
    console.log(this.side * this.side)
  }
}

const newSquare = new Square (9,4);

newSquare.perimeter();
newSquare.area();
