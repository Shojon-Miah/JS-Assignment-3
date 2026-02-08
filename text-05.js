//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {

    if (!Number.isFinite(currentPrice) || !Number.isFinite(discount)) {
        return "Invalid";
    }
    else if (currentPrice < 0 || discount > 100) {
        return "Invalid";
    }
    else {
        let discountAmount = (currentPrice * discount) / 100;
        let finalPrice = currentPrice - discountAmount;
        return finalPrice = finalPrice.toFixed(3);
    }
}

//Problem-02: OTP Validation for Zapshift

function  validOtp(otp){

    if (typeof otp !== 'string'){
        return "Invalid";
    }
    else if (otp.length === 8 && otp.startsWith("ph-")){
        return true;
    }
    else {
        return false;
    }
}

//Problem-03: BCS Final Score Calculator

function finalScore(omr) {
    // console.log(omr);
    if (typeof omr !== 'object' || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }

    let right = omr.right;
    let wrong = omr.wrong;
    let skip = omr.skip;

    if (typeof right !== 'number' || typeof wrong !== 'number' || typeof skip !== 'number') {
        return "Invalid";
    }
    else if ((right + wrong + skip) !== 100) {
        return "Invalid";
    }
    else {
        let score = right - (wrong * 0.5);
        return Math.round(score);
    }
}


//Problem-04: Upcoming Gono Vote

function gonoVote (array){
    
    if (!Array.isArray(array)){
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for(let vote of array){
        if(vote === "ha")
        {
            haCount++;
        }
        else {
            naCount++;
        }
    }

    if (haCount > naCount)
        return true;
    else if (haCount === naCount)
        return "equal";
    else
        return false;
}


//Problem-05: Text Analyzer for an AI Company

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


