// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift == 0 || shift < -25 || shift > 25) {
      return false
    };

    if (!encode) {shift *= -1};
    
    let lowerCaseInput = input.toLowerCase();
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let output = "";

    for (let i = 0; i < lowerCaseInput.length; i++) {
     let eachInputLetter = lowerCaseInput[i];
       let letterIndex = alphabet.indexOf(eachInputLetter);
       if (letterIndex == -1) {output += eachInputLetter}
       else {let newIndex = letterIndex + shift
       if (newIndex > 25) {newIndex = newIndex - 26};
       if (newIndex < 0) {newIndex = newIndex + 26};
       output += alphabet[newIndex];
       }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
