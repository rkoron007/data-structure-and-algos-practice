const chai = require("chai");
const expect = chai.expect;

const urlify = require("../urlify.js");

describe("urlify", () => {
  it('should replace spaces within the string with "%20"', () => {
    let test = urlify("Mr John     S");
    let result = "Mr%20John%20S";
    let test2 = urlify("Sammy      G");
    let result2 = "Sammy%20G";
    let test3 = urlify("Lei lei la");
    let result3 = "Lei%20lei%20la";

    expect(test).to.eql(result);
    expect(test2).to.eql(result2);
    expect(test3).to.eql(result3);
  });

  it("should return an empty string when a string of empty spaces is input", () => {
    let test = urlify("     ");
    let result = "";

    expect(test).to.eql(result);
  });

  it("should return an empty string when given an empty string", () => {
    let test = urlify("");
    let result = "";

    expect(test).to.eql(result);
  });
});
