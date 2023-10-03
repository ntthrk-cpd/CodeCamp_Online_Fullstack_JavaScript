function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(){
        let temp = Number(prompt("Enter Number"));
        this.value += temp;
    }
}