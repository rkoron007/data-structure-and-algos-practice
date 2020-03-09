const chai = require("chai");
const expect = chai.expect;

const countAndSay = require("../count-and-say");

describe("countAndSay()", () => {
  it("should return an empty string with an input of 0 or below", () => {
    let test = countAndSay(0);
    let test1 = countAndSay(-15);
    let result = "";

    expect(test).to.eql(result);
    expect(test1).to.eql(result);
  });

  it("with an input of one it should return one", () => {
    let test = countAndSay(1);
    let result = "1";

    expect(test).to.eql(result);
  });

  it("should return the sequence for n number", () => {
    let test = countAndSay(2);
    let test2 = countAndSay(3);
    let test3 = countAndSay(4);
    let test4 = countAndSay(5);
    let test5 = countAndSay(6);
    let result = "11";
    let result2 = "21";
    let result3 = "1211";
    let result4 = "111221";
    let result5 = "312211";

    expect(test).to.eql(result);
    expect(test2).to.eql(result2);
    expect(test3).to.eql(result3);
    expect(test4).to.eql(result4);
    expect(test5).to.eql(result5);
  });
});
