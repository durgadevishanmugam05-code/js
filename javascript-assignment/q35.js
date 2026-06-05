let prices = [199, 129, 98, 78, 11, 171, 1055];
for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
        if (prices[i] > prices[j]) {
            let temp = prices[i];
            prices[i] = prices[j];
            prices[j] = temp;
        }
    }
}

console.log(prices);