const chai = require('chai');
const expect = chai.expect;

const arrayProduct = require("../02");

describe('arrayProduct', () => {
  it('should return an array where each element is the product of all the original elements minus the element at the input index', () => {
    let test = arrayProduct([1, 2, 3, 4, 5])
    let test2 = arrayProduct([3, 2, 1])

    let result = [120, 60, 40, 30, 24];
    let result2 = [2, 3, 6];

    expect(test).to.eql(result);
    expect(test2).to.eql(result2);
  });

  it('should return an empty array if the input array is empty', () => {
    let test = arrayProduct([])
    let result = [];

    expect(test).to.eql(result)
  });

  it('should return an empty array if the input array is one element', () => {
    let test = arrayProduct([1])
    let result = [];

    expect(test).to.eql(result)
  });

  it('should work with negative numbers', () => {
    let test = arrayProduct([-1, -2, -3])
    let test2 = arrayProduct([-1, -2, -3, -4, -5])
    let result = [6, 3, 2];
    let result2 = [120, 60, 40, 30, 24];

    expect(test).to.eql(result)
    expect(test2).to.eql(result2)
  });
});