
let numbers=[1,2,3,4,5,6,7,8,9,10]
let num=numbers.find(n=>n==20)
console.log(num)


//find function
let number=numbers.find((num)=>{
    return num==23;
})
console.log(numbers)
console.log(number)

