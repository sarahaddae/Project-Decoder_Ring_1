// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if the shift value is not present", () => {
        const expected = false;
        const actual = caesar("thinkful");
        expect(actual).to.eql(expected);
    });

    it("should return false if the shift value is equal to 0", () => {
     const expected = false;
        const actual = caesar("thinkful", 0);
        expect(actual).to.eql(expected);
    });

    it("should return false if the shift value is less than -25", () => {
     const expected = false;
        const actual = caesar("thinkful", -26);
        expect(actual).to.eql(expected);
    });

    it("should return false if the shift value is greater than 25", () => {
        const expected = false;
           const actual = caesar("thinkful", 28);
           expect(actual).to.eql(expected);
       });

    it("should encode a message when the encode value is set to true", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
           const actual = caesar("This is a secret message!", 8);
           expect(actual).to.eql(expected);
       });

    it("should decode a message when the encode value is set to false", () => {
        const expected = "thinkful";
           const actual = caesar("wklqnixo", 3, false);
           expect(actual).to.eql(expected);
       });

    it("should ignore non alphabet symbols and spaces", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
           const actual = caesar("This is a secret message!", 8);
           expect(actual).to.eql(expected);
       });
})