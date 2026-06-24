//Data transformstion

//create new array by adding +5
let numbers=[1,2,3,4,5,6,7,8,9,10]
let new_nums=numbers.map(num=>num+5)
console.log(new_nums)


//map array fun
let numbers=[1,2,3,4,5,6,7,8,9,10]
let new_nums=numbers.map((num)=>{
    return num+5;
})
console.log(new_nums)
