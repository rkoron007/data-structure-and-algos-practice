const chai = require("chai");
const expect = chai.expect;
const missingNumber = require("../missing-number");

describe("missingNumber", () => {
  it("should find the missing number in an array of distinct values", () => {
    let test = missingNumber([3, 0, 1]);
    let result = 2;

    let test2 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
    let result2 = 8;
    expect(test).to.equal(result);
    expect(test2).to.equal(result2);
  });

  it("should default to return the lowest missing number", () => {
    let test = missingNumber([1]);
    let test2 = missingNumber([1, 2]);
    let result = 0;

    expect(test).to.equal(result);
    expect(test2).to.equal(result);
  });

  it("if the array contains a zero and no other number is missing the next highest number is returned", () => {
    let test = missingNumber([0, 1]);
    let result = 2;
    let test2 = missingNumber([0, 1, 2, 5, 4, 6, 3, 7]);
    let result2 = 8;

    expect(test).to.equal(result);
    expect(test2).to.equal(result2);
  });

  it("should return an empty array if the input is an empty array", () => {
    let test = missingNumber([]);

    expect(test).to.be.a("array");
    expect(test.length).to.equal(0);
  });
});
