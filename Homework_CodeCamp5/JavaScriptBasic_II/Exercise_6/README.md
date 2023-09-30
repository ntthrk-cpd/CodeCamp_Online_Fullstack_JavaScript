### CodeCamp # 5 <br>
Nattharika Cheepandung <br>
<br>
<br>

# Exercise 6 Arrow Function

- แปลง function ข้างล่างให้อยู่ในรูป arrow function

```javascript
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask (
    "Do you agree?",
    function() { alert("You areed."); },
    function() { alert("You cancled the execution."); }
);

```