console.log("" + 1 + 0);    // 10
console.log( "" - 1 + 0);   // -1
console.log(true + false);  //1
console.log(6 / "3");       //2
console.log("2" * "3");     //6
console.log(4 + 5 + "px");  //9px
console.log("$" + 4 + 5);   //$45
console.log("4" - 2);       //2
console.log("4px" - 2);     //NaN
console.log(7 / 0);         //Infinity
console.log(" -9 " + 5);    // -9 5
console.log(" -9 " - 5);    //-14
console.log(null + 1);      //1
console.log(underfined + 1); //Uncaught ReferenceError: underfined is not defined
console.log("\t \n" - 2);   // -2