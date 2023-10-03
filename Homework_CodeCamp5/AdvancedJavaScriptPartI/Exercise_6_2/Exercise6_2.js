function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name ); 
  // What's the result?
    // undefined
    // เพราะว่า this ใน ref จะเป็น window ซึ่งไม่มี property name
    // ถ้าต้องการให้ user.ref.name ได้ค่าเป็น "John" ต้องเปลี่ยนเป็น user.ref.name = user.name แทน
