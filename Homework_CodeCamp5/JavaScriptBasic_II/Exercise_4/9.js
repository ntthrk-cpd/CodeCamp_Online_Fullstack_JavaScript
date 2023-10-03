function draw(n){
    let txt = '';
    let count = 2;
    let i = 0;

    while (i < n) {
        if((count % 2) == 0) {
            txt += count;
        }
        else {
            txt += '\n';
            i++;
        }
        count++;
    }
        
    console.log(txt);
    console.log("n :" + n);
    return txt;
}
