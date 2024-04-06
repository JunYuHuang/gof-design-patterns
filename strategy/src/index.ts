interface MathOperationStrategy {
  operate: (a: number, b: number) => number;
}

class AddMathOperationStrategy implements MathOperationStrategy {
  operate(a: number, b: number) {
    return a + b;
  }
}

class SubtractMathOperationStrategy implements MathOperationStrategy {
  operate(a: number, b: number) {
    return a - b;
  }
}

class MultiplyMathOperationStrategy implements MathOperationStrategy {
  operate(a: number, b: number) {
    return a * b;
  }
}

class DivideMathOperationStrategy implements MathOperationStrategy {
  operate(a: number, b: number) {
    return a / b;
  }
}

class MathOperation {
  private _mathOperationStrategy: MathOperationStrategy;

  constructor(strategy: MathOperationStrategy) {
    this._mathOperationStrategy = strategy;
  }

  setStrategy(strategy: MathOperationStrategy) {
    this._mathOperationStrategy = strategy;
  }

  runStrategy(a: number, b: number) {
    return this._mathOperationStrategy.operate(a, b);
  }
}

export {
  MathOperationStrategy,
  AddMathOperationStrategy,
  SubtractMathOperationStrategy,
  MultiplyMathOperationStrategy,
  DivideMathOperationStrategy,
  MathOperation
}
