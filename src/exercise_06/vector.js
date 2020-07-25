export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  constructor(x, y) {
    Object.defineProperty(this, 'x', {
      value: x,
      writable: false,
    });
    Object.defineProperty(this, 'y', {
      value: y,
      writable: false,
    });
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(x) {
    this._x = x;
  }

  set y(y) {
    this._y = y;
  }

  static plus(v1, v2) {
    let newX;
    let newY;
    if (v2 !== undefined) {
      newX = v1.x + v2.x;
      newY = v1.y + v2.y;
    } else {
      newX = this.x + v1.x;
      newY = this.y + v1.y;
    }
    return new Vector(newX, newY);
  }

  static minus(v1, v2) {
    let newX;
    let newY;
    if (v2 !== undefined) {
      newX = v1.x - v2.x;
      newY = v1.y - v2.y;
    } else {
      newX = this.x - v1.x;
      newY = this.y - v1.y;
    }
    return new Vector(newX, newY);
  }

  distance() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }
}
