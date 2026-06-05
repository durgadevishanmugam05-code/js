
let prices = [199, 129, 98, 78, 11, 171, 1055];
let newPrices = [];

for (let price of prices) {
    newPrices.push(price + price * 0.10);
}

console.log(newPrices);