let prices = [199, 129, 98, 78, 11, 171, 1055];
for (let price of prices) {
    let isPrime = true;

    if (price < 2) {
        isPrime = false;
    }

    for (let i = 2; i < price; i++) {
        if (price % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(price);
    }
}