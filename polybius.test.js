// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should return a string", () => {
        const expected = typeof("thinkful");
        const result = polybius("thinkful");
        const actual = typeof(result);
        expect(actual).to.eql(expected);
    });

    it("should encode a message", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.eql(expected);
    });

    it("should decode a message", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.eql(expected);
    });

    it("should return a message where both i and j share a space", () => {
           const expected = "th(i/j)nkful";
           const actual = polybius("4432423352125413", false);
           expect(actual).to.eql(expected);
       });

    
})
