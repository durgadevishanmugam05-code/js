let prices = [199, 129, 98, 78, 11, 171, 1055];
let searchPrice = 171;
let found = false;

for (let price of prices) {
    if (price === searchPrice) {
        found = true;
        break;
    }
}

console.log(found ? "Found" : "Not Found");