let obj = {};
let key = "start";

while (key != "stop") {
    key = prompt("Input key :");
    if (key == "stop") break;
    let value = prompt("Input value :");
    obj[key] = value;
}

console.log(obj);