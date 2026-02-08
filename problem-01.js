
function newPrice(currentPrice, discount) {

    if (!Number.isFinite(currentPrice) || !Number.isFinite(discount)) {
        return "Invalid";
    }
    else if (discount < 0 ||  discount > 100) {
        return "Invalid";
    }
    else {
        let discountAmount = (currentPrice * discount) / 100;
        let finalPrice = currentPrice - discountAmount;
        return finalPrice.toFixed(3);
    }
}

 console.log(newPrice(1500, 100));
// console.log(newPrice(2000, -5));
// console.log(newPrice(1200, 35));
// console.log(newPrice("1000", 10));
// console.log(newPrice(2100, 19.257));
// console.log(newPrice(500, "5"));
// console.log(newPrice(4590, 29));
// console.log(newPrice(- 2000, 15));
// console.log(newPrice(- 2000, ' '));


/** 
function newPrice( currentPrice, discount){


    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100){
        return "Invalid";
    }
    else {
        let discountAmount = (currentPrice * discount)/100;
        let finalPrice = currentPrice -discountAmount;
        finalPrice = finalPrice.toFixed(3);
        return parseFloat(finalPrice);

    }
}

// console.log(newPrice(1500, 20));
// console.log(newPrice(2000, 15));
// console.log(newPrice(1200, 101));
// console.log(newPrice("1000", 10));
// console.log(newPrice(2100, 19.257));
// console.log(newPrice(500, "5"));
// console.log(newPrice(4590, 29));
// console.log(newPrice(- 2000, 15));
// console.log(newPrice(- 2000, ' '));


if (!Number.isFinite(currentPrice) || !Number.isFinite(discount) || discount < 0 || discount > 100) {
        return "Invalid";
    }


*/