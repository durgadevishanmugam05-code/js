let prices = [199, 129, 98, 78, 11, 171, 1055];
let even = 0;
let odd = 0;

for (let price of prices) {
    if (price % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even:", even);
console.log("Odd:", odd);