class Polygon {
  constructor(numberOfSide, base, height){
    this.numberOfSide = numberOfSide;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    const perimeter = this.base * this.numberOfSide;
    return perimeter;
  }
  area (){
    const area = this.base * this.height
    return area;
  }
}

export {Polygon};