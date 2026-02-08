

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





// console.log(finalScore({ right: "50", wrong: 30, skip: 20 }));
// console.log(finalScore(!@#));

// console.log(finalScore("!@#"));
// console.log(finalScore(["Raj"]));
// console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
// console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
// console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
// console.log(finalScore({ right: 85, wrong: 15, skip: 0 }));


