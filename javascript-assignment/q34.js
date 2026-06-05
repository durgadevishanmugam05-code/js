let arr = [199, 129, 98, 129, 11, 171, 98];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            console.log(arr[i]);
        }
    }
}