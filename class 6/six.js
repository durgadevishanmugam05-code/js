let products=
[{"pid":1,"pname":"Greek Yogurt","price":1.99,"category":"Food - Dairy"},
{"pid":2,"pname":"Portable Massage Gun","price":79.99,"category":"Health"},
{"pid":3,"pname":"Banana Nut Oatmeal Cups","price":2.99,"category":"Food - Breakfast"},
{"pid":4,"pname":"Chickpea Flour","price":3.29,"category":"Food - Baking"},
{"pid":5,"pname":"Collapsible Folding Chair","price":29.99,"category":"Outdoor"}]

for( let key in products){
    console.log(products[key].category);
    
}
