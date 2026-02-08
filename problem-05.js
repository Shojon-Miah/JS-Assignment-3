

function analyzeText(str){
    // console.log(str);
    if(typeof str !== 'string' || str.trim().length === 0)
        return "Invalid";
    let words = str.split(" ");
    // return words;
    let longtWord = words[0];

    for(let i =0; i < words.length; i++){
        if (words[i].length > longtWord.length)
            longtWord = words[i];
    }
    // return longestWord;

    let totalCharacterWithoutSpace = str.split(" ").join("").length;
    
    return { longwords:longtWord, token: totalCharacterWithoutSpace };
}


//console.log(analyzeText(1255));
// console.log(analyzeText(""));
// console.log(analyzeText("      "));
// console.log(analyzeText("Programming is fun"));
// console.log(analyzeText("I am a little honest person"));
// console.log(analyzeText("A quick brown fox"));
// console.log(analyzeText("Hello world"));
//console.log(analyzeText("I   am   a   student"));




/**

let words = str.trim().split("/\s+/"); // Multiple space handle

function analyzeText(str){
    // console.log(str);
    if(typeof str !== 'string' || str.trim().length === 0)
        return "Invalid";
    let words = str.split(" ");
    //let words = str.trim().split("/\s+/"); // Multiple space handle
    // return words;
    let longtWord = words[0];

    for(let i =0; i < words.length; i++){
        if (words[i].length > longtWord.length)
            longtWord = words[i];
    }
    // return longestWord;

    let totalCharacterWithoutSpace = str.split(" ").join("").length;
    // return totalCharacterWithoutSpace;
    // totalCharacterWithoutSpace = totalCharacterWithoutSpace.length;
    // return totalCharacterWithoutSpace;

    return { longwords:longtWord, token: totalCharacterWithoutSpace };
}


// console.log(analyzeText(1255));
// console.log(analyzeText(""));
// console.log(analyzeText("      "));
// console.log(analyzeText("Programming is fun"));
// console.log(analyzeText("I am a little honest person"));
// console.log(analyzeText("A quick brown fox"));
// console.log(analyzeText("Hello world"));
// console.log(analyzeText("Hello        world" ));

*/