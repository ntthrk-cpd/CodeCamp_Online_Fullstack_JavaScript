let obj = {};
let key = "start";

while (key != "stop") {
    key = prompt("Fruit Name is...:");
    if (key == "stop") break;
    let value = Number(prompt("How many? :"));
    if (value > 1)
        key += 's';
    obj[key] = value;
}

console.log(obj);