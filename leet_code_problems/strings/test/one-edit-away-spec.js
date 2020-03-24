const chai = require("chai");
const expect = chai.expect;

const oneAway = require("../one-edit-away");


describe('oneAway', () => {
  it('should return true if the string is one "edit" away from the second string', () => {
    let test = oneAway("pale", "ple")
    let test2 = oneAway("pales", "pale")
    let test3 = oneAway("pale", "bale")

    expect(test).to.be.true;
    expect(test2).to.be.true;
    expect(test3).to.be.true;
  });

  it('should return false if the string is more than one "edit" away from the second string', () => {
    let test = oneAway("pale", "pless")
    let test2 = oneAway("pales", "pales")
    let test3 = oneAway("pale", "bake")

    expect(test).to.be.false;
    expect(test2).to.be.false;
    expect(test3).to.be.false;
  });
});