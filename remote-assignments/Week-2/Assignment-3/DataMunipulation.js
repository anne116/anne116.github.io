/*
Assignment 3: Data Manipulation
1. count: return an object which shows the count of each character.
2. groupByKey: return an object which shows the summed-up value of each key.
This time, you may get letters from ‘a’ to ‘z’, try to avoid using ‘if’ or ‘switch’ to split each letter into different cases (e.g. if(letter == ‘a’) {...} else if (letter == ‘b’) {...} ), otherwise, your code will be very long.

Note:
1. The input format is different for these two functions.
2. In the second function, the input may have the same key but different values, the
output should have each key only once.
*/

function count(input) {
    // your code here
    //initialize an empty object to store counts
    const countLetters = {}; 
    //loop each letter, +1 if letter already exists. If it doesn't exist, add it to the object with 1 count.
    input.forEach(letter => {
        if ( countLetters[letter] ) {
            countLetters[letter]++;
        } else {
            countLetters[letter] = 1;
        }
    });
    return countLetters;
}
    let input1 = ["a", "b", "c", "a", "c", "a", "x"];  
    console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}



    function groupByKey(input) {
    // your code here
    const countByGroup = {};
    input.forEach( obj => {
        const key = obj['key'];
        const value = obj['value'];

        if (countByGroup[key]) {
            countByGroup[key] += value ;
        } else {
            countByGroup[key] = value ;
        }
    });
    return countByGroup;
    }
    let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
    ];
    console.log(groupByKey(input2));
    // should print {a:6, b:1, c:7}

