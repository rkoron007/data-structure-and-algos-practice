const chai = require("chai");
const expect = chai.expect;

const permaPalindrome = require("../perm-palindrome");

describe('permaPalindrome', () => {
  it('should return true if the given string\'s permutation would be a palindrome', () => {
    let test = permaPalindrome("racecar");
    let test2 = permaPalindrome("Taco Cat");
    let test3 = permaPalindrome("appleapple");
    let test4 = permaPalindrome("zzeebbr");

    expect(test).to.be.true;
    expect(test2).to.be.true;
    expect(test3).to.be.true;
    expect(test4).to.be.true;
  });
  it('should return false if the given string\'s permutation would not be a palindrome', () => {
    let test = permaPalindrome("racezcar");
    let test2 = permaPalindrome("Taco Catbn");
    let test3 = permaPalindrome("appleqwapple");
    let test4 = permaPalindrome("zzweebrbrp");
    let test5 = permaPalindrome("ab");

    expect(test).to.be.false;
    expect(test2).to.be.false;
    expect(test3).to.be.false;
    expect(test4).to.be.false;
    expect(test5).to.be.false;
  });
});