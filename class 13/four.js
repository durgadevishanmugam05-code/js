//fatarrow and implicit fun
/*
let wish=name=>"hello:"+name;
let msg=wish("rahul")
console.log(msg)
*/

// normal function
/*
function wish(name){
    return "hello:"+name
}
let msg=wish("rahul")
console.log(msg)
*/

//fatarrow fun
let wish =(name)=>{
    return"hello:"+name;
}
let msg=wish("rahul")
console.log(msg)