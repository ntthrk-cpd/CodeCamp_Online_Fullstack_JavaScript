let calculator = {
    // ... your code ...
    read() { 
        this.number1 = Number(prompt("Input number 1 : "));
        this.number2 = Number(prompt("Input number 2 : "));
    },
    sum () { 
        return this.number1 + this.number2;
    },
    mul () { 
        return this.number1 * this.number2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
