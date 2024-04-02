import compare from './compare';

class Expression {
  interpret() {}
}

class ValueExpression extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  interpret() {
    return this.value;
  }
}

class LogicalExpression extends Expression {
  constructor(left, operator, right) {
    super();
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  interpret() {
    const left = this.left.interpret();
    const right = this.right.interpret();
    if (this.left.operator === '&&' && !left) return false;

    return compare([left, this.operator, right]);
  }
}

export const evaluateStatement = (statement) => {
  const [left, operator, right] = statement;

  const leftExpression = Array.isArray(left)
    ? evaluateStatement(left)
    : new ValueExpression(left);
  const rightExpression = Array.isArray(right)
    ? evaluateStatement(right)
    : new ValueExpression(right);
  return new LogicalExpression(leftExpression, operator, rightExpression);
};
