/* The element interface */
interface Shape {
  accept: (shapeVisitor: ShapeVisitor) => number;
}

// ========================
// CONCRETE ELEMENT CLASSES
// ========================

type CircleArgs = { radius: number; }

class Circle implements Shape {
  radius: number;

  constructor(args: CircleArgs) {
    this.radius = args.radius;
  }

  accept(shapeVisitor: ShapeVisitor) {
    return shapeVisitor.visitCircle(this);
  }
}

type RectangleArgs = {
  width: number;
  height: number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(args: RectangleArgs) {
    const { width, height } = args;
    this.width = width;
    this.height = height;
  }

  accept(shapeVisitor: ShapeVisitor) {
    return shapeVisitor.visitRectangle(this);
  }
}

/* The visitor interface */
interface ShapeVisitor {
  visitCircle: (circle: Circle) => number;
  visitRectangle: (rectangle: Rectangle) => number;
}

// ========================
// CONCRETE VISITOR CLASSES
// ========================

class AreaVisitor implements ShapeVisitor {
  visitCircle(circle: Circle) {
    return Math.PI * Math.pow(circle.radius, 2);
  }

  visitRectangle(rectangle: Rectangle) {
    const { width, height } = rectangle;
    return width * height;
  }
}

class PerimeterVisitor implements ShapeVisitor {
  visitCircle(circle: Circle) {
    return 2 * Math.PI * circle.radius;
  }

  visitRectangle(rectangle: Rectangle) {
    const { width, height } = rectangle;
    return 2 * (width + height);
  }
}

export {
  Circle,
  Rectangle,
  AreaVisitor,
  PerimeterVisitor
}
