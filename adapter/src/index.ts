/* The client interface */
interface RoundPegInterface {
  getRadius: () => number;
}

/* The client interface */
class RoundPeg implements RoundPegInterface {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }
}

/* The adaptee / service */
class SquarePeg {
  width: number;

  constructor(width: number) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }
}

/* The adapter */
class SquarePegToRoundPegAdapter implements RoundPegInterface {
  adaptee: SquarePeg;

  constructor(adaptee: SquarePeg) {
    this.adaptee = adaptee;
  }

  getRadius() {
    return this.adaptee.getWidth() * Math.sqrt(2) / 2;
  }
}

/* The client */
class RoundHole {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  doesPegFit(peg: RoundPegInterface) {
    return this.getRadius() >= peg.getRadius();
  }
}

export {
  RoundPeg,
  SquarePeg,
  SquarePegToRoundPegAdapter,
  RoundHole
}
