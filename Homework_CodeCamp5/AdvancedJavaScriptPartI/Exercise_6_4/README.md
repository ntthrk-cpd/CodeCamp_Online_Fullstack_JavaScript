### CodeCamp # 5 <br>
Nattharika Cheepandung <br>
<br>
<br>

# Exercise 6 #4 : Methods ของ Object

**แบบฝึกหัด** 

4.	ให้ Object ชื่อ ladder มี method ขึ้น และ ลง

```javascript
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
```

Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

```javascript
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```

ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

```javascript
ladder.up().up().down().showStep(); // 1
```