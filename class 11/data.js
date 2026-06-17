let empolyees=[{"eid":1,"ename":"Adora","gender":"Female"},
{"eid":2,"ename":"Jamil","gender":"Male"},
{"eid":3,"ename":"Rowen","gender":"Male"},
{"eid":4,"ename":"Lauryn","gender":"Female"},
{"eid":5,"ename":"Manon","gender":"Female"},
]

function display_Data(){
    let rows="";
    for(let emp of employees){
        rows=rows+`<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.gender}</td>
                   </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows;
}