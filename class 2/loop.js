//create array
let enames=["Rahul","Sonia","Priya",'Modi']
//indexing    0        1         2     3

for(let enames of enames){
    console.log(enames)
}

//NEW example
let pnd_colors=["red","green","yellow","orange"]

console.log(pnd_colors[0])  //red
console.log(pnd_colors[3])  //orange    
console.log(pnd_colors[7])  //undefined

// iterate array using for of loop

for(let color of pnd_colors){
    console.log(color)
}

