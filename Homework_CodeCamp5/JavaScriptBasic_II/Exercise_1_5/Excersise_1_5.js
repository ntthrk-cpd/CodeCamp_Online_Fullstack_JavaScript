let user = prompt("คุณคือใคร");
let admin = "admin";
let password;
let passwordAdmin = "codecamp#5"

if (!Boolean(user)) {
    alert("ยกเลิก");
} 
else if (String(user.toUpperCase) == String(admin.toUpperCase)) {
    password = prompt("รหัสผ่านคืออะไร");
    checkPassword(password);
}
else {
    alert("ฉันไม่รู้จักคุณ");
}

function checkPassword(password) {
    if (!Boolean(password)) {
        alert("ยกเลิก");
    } 
    else if (String(password)=== String(passwordAdmin)) {
        alert("ยินดีต้อนรับ");
    }else {
        alert("รหัสผ่านผิด");
    }
} 