// let user = {
//     name: "John",
//     go: function() { alert(this.name) }
// }
  
// (user.go)()

//Not Work.
//Uncaught SyntaxError: Identifier 'user' has already been declared

/**************************************************/

let user = {
    name: "John",
    go: function() { alert(this.name) }
}; //fix add ';' 
  
(user.go)(); //fix add ';' 

//Show alart("John");