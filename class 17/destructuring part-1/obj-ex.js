let state={
    uid:101,
    uname:'rahul',
    loc:'waranad'
}
 
//console.log(uid)-- reference error

let {uname,loc}=state;
console.log(uname)
console.log(loc)