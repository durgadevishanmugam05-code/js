let employees=[
    {id:101, name:"John", gender:"Male"},
    {id:102, name:"Jane", gender:"Female"},        
    {id:103, name:"Doe", gender:"Male"},
    {id:104, name:"Smith", gender:"Male"}
];
console.log(employees.length);

let maleCount = 0;
for(const emp of employees) {
    if(emp.gender === "Male") {     
        maleCount++;
    }
}
console.log("No of Males:", maleCount);

let femaleCount = 0;    
for(const emp of employees) {
    if(emp.gender === "Female") { 
        femaleCount++;
    }
}
console.log("No of Females:", femaleCount);
