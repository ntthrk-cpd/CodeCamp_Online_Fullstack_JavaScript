let score = null; 
let reg = /^[0-9][0-9]?$|^100$|^0$/;
let GPAx = false;

while(!Boolean(GPAx)){
    score = prompt("กรอกคะแนนที่ได้ [0-100] :");
    if (score.match(reg)){
        GPAx = calGPA(score);
        alert("GPA is " + GPAx);
        GPAx = false;
    }
    else {
        alert("กรอกข้อมูลไม่ถูกต้อง กรุณากรอกตัวเลขระหว่าง 0-100 เท่านั้น")
    }
}

function calGPA(score){
    if (score <= 100 && score >= 0) {
        if (score >= 80)    GPAx = "A"
        else if (score >= 70)   GPAx = "B"
        else if (score >= 60)   GPAx = "C"
        else if (score >= 50)   GPAx= "D"
        else GPAx = "F"
        return GPAx;
    }
    return false;
}
