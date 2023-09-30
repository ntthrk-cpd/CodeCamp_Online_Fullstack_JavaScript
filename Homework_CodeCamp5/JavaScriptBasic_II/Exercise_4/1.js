let n = prompt("ใส่ค่า n :");
let i = 0;
let txt = '';
let r = document.getElementById("result");

for(let i = 0; i < n; i++)
    txt += '*';

console.log(txt);
console.log("n :" + n);

r.innerHTML = txt;
r.innerHTML += `<br>n : ${n}`;

