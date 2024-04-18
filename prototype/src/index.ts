/* The prototype interface or abstract class */
abstract class Shape {
  x: number;
  y: number;
  color: string;

  // creates a new Shape subclass or from an existing one
  constructor(source?: Shape) {
    if (source === undefined) {
      this.x = 0;
      this.y = 0;
      this.color = "white";
    } else {
      this.x = source.x;
      this.y = source.y;
      this.color = source.color;
    }
  }

  abstract clone(): Shape;
}

// ==========================
// CONCRETE PROTOTYPE CLASSES
// ==========================

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(source?: Rectangle) {
    if (source === undefined) {
      super();
      this.width = 1;
      this.height = 1;
    } else {
      super(source);
      this.width = source.width;
      this.height = source.height;
    }
  }

  clone() {
    return new Rectangle(this);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(source?: Circle) {
    if (source === undefined) {
      super();
      this.radius = 1;
    } else {
      super(source);
      this.radius = source.radius;
    }
  }

  clone() {
    return new Circle(this);
  }
}

export {
  Shape,
  Rectangle,
  Circle
}
