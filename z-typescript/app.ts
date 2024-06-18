class Shape {
  type = "Shape";
  constructor(public color: string) {
    this.color = "transparent";
  }

  //method
  describe() {
    return console.log(`A ${this.color}, ${this.type}`);
  }
}

class Square extends Shape {
  constructor(public color: string, public sideLength: number) {
    super(color);
    this.color = color;
    this.sideLength = sideLength;
    this.type = "Square";
  }

  //method
  area() {
    const area = this.sideLength * this.sideLength;
    return console.log(`The Area of the square is: ${area}`);
  }
}

class Rectangle extends Shape {
  constructor(
    public color: string,
    public width: number,
    public height: number
  ) {
    super(color);
    this.color = color;
    this.width = width;
    this.height = height;
  }

  //method
  area() {
    const area = this.width * this.height;
    return console.log(`The area of the rectangle is: ${area}`);
  }
}

//testing
const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
console.log(square.area());
console.log(rectangle.area());

for (const shape of [square, rectangle]) {
  console.log(shape.describe());
}
