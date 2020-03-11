const chai = require("chai");
const expect = chai.expect;

const twoSum = require("../01");

describe("twoSum", () => {
  it("should return true if any two numbers in the array add up to the target value", () => {
    let test = twoSum([10, 15, 3, 7], 17);
    let test2 = twoSum([650, 1000, 1, 22], 23);
    let test3 = twoSum([650, 1000, 1, 22], 1650);

    expect(test).to.be.true;
    expect(test2).to.be.true;
    expect(test3).to.be.true;
  });

  it("should return false if no two numbers add to the target", () => {
    let test = twoSum([10, 15, 3, 7], 50);
    let test2 = twoSum([650, 1000, 1, 22], 24);
    let test3 = twoSum([650, 1000, 1, 22], 1651);

    expect(test).to.be.false;
    expect(test2).to.be.false;
    expect(test3).to.be.false;
  });

  it("should return true if two duplicate numbers add to the target", () => {
    let test = twoSum([10, 10], 20);
    let test2 = twoSum([2, 2], 4);
    let test3 = twoSum([30, 1000, 1, 30], 60);

    expect(test).to.be.true;
    expect(test2).to.be.true;
    expect(test3).to.be.true;
  });

  it("should return false if the array is empty", () => {
    let test = twoSum([], 20);

    expect(test).to.be.false;
  });

  it("when the array contains zeros", () => {
    let test = twoSum([20, 0], 20);
    let test2 = twoSum([3, 0], 20);

    expect(test).to.be.true;
    expect(test2).to.be.false;
  });

  it("should work with negative numbers", () => {
    let test = twoSum([-20, 0, 20], 0);
    let test2 = twoSum([3, 0, 2, -3], -1);
    let test3 = twoSum([1, 32, 15, -14], 1);

    expect(test).to.be.true;
    expect(test2).to.be.true;
    expect(test3).to.be.true;
  });
});
