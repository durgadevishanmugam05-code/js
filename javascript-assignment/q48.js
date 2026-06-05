let prices = [199, 129, 98, 78, 11, 171, 1055];
let count = 0;

for (let price of prices) {
    if (price % 5 === 0) {
        count++;
    }
}

console.log(count);