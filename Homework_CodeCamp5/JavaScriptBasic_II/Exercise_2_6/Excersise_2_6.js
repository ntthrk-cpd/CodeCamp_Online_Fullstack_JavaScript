// 6.	ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
let user1;
let user2;
// - ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร

let reg = /^[1-9][0-9]?$|^100$/;

while(1){
    user1 = prompt("ใส่ตัวเลขที่อยู่ระหว่าง 1-100 ");
    if (user1.match(reg)){
        guessNumber(user1);
        break;
    }
    else {
        alert("กรอกข้อมูลไม่ถูกต้อง กรุณากรอกตัวเลขระหว่าง 1-100 เท่านั้น")
    }
    user1 = null;
}

// - และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
function guessNumber(user1)
{
    while(!Boolean(Number(user2))) {
        user2 = prompt("ใส่เลขที่ต้องการทาย");
        if (Number(user1) === Number(user2)) {
            alert("ถูกต้อง");
            break;
        }
        else if (Number(user1) < Number(user2)) alert("มากกว่า");
        else if (Number(user1) > Number(user2)) alert("น้อยกว่า");
        else alert("ใส่ตัวเลขเท่านั้น");
        user2 = null;
    }
}


