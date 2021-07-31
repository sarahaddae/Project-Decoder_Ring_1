// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should encode a message", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); 
        expect(actual).to.eql(expected);
    });

    it("should decode a message", () => {
        const expected = "thinkful";
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
    });

    it("should preserve spaces", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });

    it("should work with any kind of key with unique characters", () => {
           const expected = "y&ii$r&";
           const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
           expect(actual).to.eql(expected);
       });

    
})
