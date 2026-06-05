 let prices = [199, 129, 98, 78, 11, 171, 1055];
let searchPrice = 171;

for (let price of prices) {
    if (price === searchPrice) {
        console.log("Price Found");
        break;
    }
}