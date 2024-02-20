// Json 
const emp = '{"name" : "anuj","Lastname" : "Yadav"}'
let obj = JSON.parse(emp);
console.log(obj.name+ obj.Lastname);
const sel = document.createElement("select");
const option3 = document.createElement("option");
option3.innerHTML = obj.name;
let option2 = document.createElement("option");
option2.innerHTML = obj.Lastname;
sel.appendChild(option3);
sel.appendChild(option2);
const bd = document.body.append(sel);
