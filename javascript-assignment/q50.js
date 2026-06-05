let prices = [199, 129, 98, 78, 11, 171, 1055];
let product = 1;

for (let price of prices) {
    product *= price;
}

console.log(product);