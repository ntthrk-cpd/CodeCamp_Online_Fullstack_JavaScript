function Calculator() {
    this.read = function() { 
        this.number1 = Number(prompt("Input number 1 : "));
        this.number2 = Number(prompt("Input number 2 : "));
    }
    this.sum = function() { 
        return this.number1 + this.number2;
    }
    this.mul = function() { 
        return this.number1 * this.number2;
    }
}