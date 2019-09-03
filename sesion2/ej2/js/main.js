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
const newSquare1= new Square (9,1);
const newSquare2= new Square (9,3);
const newSquare3= new Square (9,7);

newSquare.perimeter();
newSquare.area();
newSquare1.perimeter();
newSquare1.area();
newSquare2.perimeter();
newSquare2.area();
newSquare3.perimeter();
newSquare3.area();
