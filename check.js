
/**
 * The JavaScript
trim() method is used to remove whitespace (spaces, tabs, newlines, etc.) from both ends (beginning and end) of a string. 

The JavaScript
Array.prototype.join() method is used to combine all elements of an array into a single string. It takes an optional separator argument to place between each element in the resulting string. The original array is not modifie.
 
*/

const elements = ['Fire', 'Water', 'Wind'];
console.log(elements.join());
// Expected output: "Fire,Water,Wind"

const originalString = "  Hello, World! \n ";
const trimmedString = originalString.trim();

console.log(originalString); // Output: "  Hello, World! \n "
console.log(trimmedString); // Output: "Hello, World!"


function analyzeText(str) {
    if (typeof str !== "string" || str.trim().length === 0) {
        return "Invalid";
    }

    // let totalChar = str.trim().length;
    // console.log(totalChar);

    // এক বা একাধিক whitespace (space, tab, newline) handle করবে
    let words = str.trim().split(/\s+/);

    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    // সব ধরনের whitespace বাদ
    let token = str.replace(/\s/g, "").length;

    return { longwords: longestWord, token: token };
}


// console.log(analyzeText("", "", "", "", "hello", "world"));
// console.log(analyzeText(""));
console.log(analyzeText("I am honest"));
// console.log(analyzeText("Programming is fun"));
// console.log(analyzeText("I   am honest"));
console.log(analyzeText("I   am   a   student   "));
//console.log(analyzeText(1255));
// console.log(analyzeText("I am a little honest person"));
// console.log(analyzeText("A quick brown fox"));
// console.log(analyzeText("Hello world"));
