### CodeCamp # 5 <br>
Nattharika Cheepandung <br>
<br>
<br>

# Exercise 6 #2 : Methods ของ Object

**แบบฝึกหัด** 

2. การทำงานของ code ดังกล่าวจะได้อะไรออกมา

```javascript
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?
```