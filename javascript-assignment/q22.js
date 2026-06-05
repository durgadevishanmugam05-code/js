let prices = [199, 129, 98, 78, 11, 171, 1055];

let max = Math.max(...prices);

for (let price of prices) {
    if (price === max) {
        continue;
    }
    console.log(price);
}