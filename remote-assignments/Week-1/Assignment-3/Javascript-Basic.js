//You will learn the basic skill of javascript next week, but it’s a good time to try to overcome some simple problems on your own first. Your job is to complete the following two functions.1. countAandB: count how many ‘a’ and ‘b’ letters are in the given input and return the total number.2. toNumber: convert English letters to numbers, let ‘a’ to be 1, ‘b’ to be 2, and so on.

function countAandB(input) {
    //Initialization
    let countA = 0;
    let countB = 0;
    //Loop thru each character in the input
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a') {
            countA++;
        } else if (input[i] === 'b') {
            countB++;
        }
    }
    //Return value
    return countA + countB;
}

function toNumber(letter) {
     const lowercaseLetter = letter.toLowerCase();
     const number = lowercaseLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

     return number;
}


