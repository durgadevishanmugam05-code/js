let prices = [199, 129, 98, 78, 11, 171, 1055];

for (let price of prices) {
    if (price > 200) {
        console.log(price, "High Price");
    } else {
        console.log(price, "Low Price");
    }
}