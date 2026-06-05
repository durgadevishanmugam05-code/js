let prices = [199, 129, 98, 78, 11, 171, 1055];
let max = Math.max(...prices);
let secondMax = -Infinity;

for (let price of prices) {
    if (price > secondMax && price < max) {
        secondMax = price;
    }
}

console.log(secondMax);