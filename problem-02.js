

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

// console.log(validOtp({ right: ph-10985}));
// // console.log(validOtp(12554873));
// console.log(validOtp("ph-1234"));
// console.log(validOtp("ac-123745"));
console.log(validOtp("ph-10985"));
// console.log(validOtp("ph-1bc85"));

// console.log(validOtp(["ph-10985"]));
// console.log(validOtp("ph-ekdjt"));
//  console.log(validOtp());
//  console.log(validOtp());