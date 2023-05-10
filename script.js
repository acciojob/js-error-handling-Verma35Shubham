class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of expression');
    this.name = 'InvalidExprError';
  }
}

function evalString(expression) {
  try {
    if (/^\+|\/|\*/.test(expression)) {
      throw new SyntaxError('Expression should not start with invalid operator');
    }
    if (/[\+\*\/-]$/.test(expression)) {
      throw new SyntaxError('Expression should not end with invalid operator');
    }
    if (/[\+\-*\/]{2}/.test(expression)) {
      throw new InvalidExprError();
    }
    // Evaluate the expression and return the result
    return eval(expression);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw err;
    } else if (err instanceof OutOfRangeError) {
      throw err;
    } else {
      throw new OutOfRangeError(expression);
    }
  }
}