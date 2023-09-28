// 2. ใช้ if else ในการเขียนถามชื่อของคุณ
// ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก”
// ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”

let myName = "Donut";
let yourName = prompt("ฉันชื่ออะไร :");

if(myName.toUpperCase() == yourName.toUpperCase()){
    alert("เก่งมาก")
}
else {
    alert("คุณไม่รู้จักฉัน")
}