function draw(n){
    let txt = '';
    let count = 1;
    
    for(let i = n; i > 1; i--) {
        for(let j = 1; j <= n; j++) {
            if (i > j)
                txt += '_';
            else{
                txt += count;
                count++;
            }
        }
        txt += '\n';
    }
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if (i > j)
                txt += '_';
            else{
                txt += count;
                count++;
            }
        }
        txt += '\n';
    }
        
    console.log(txt);
    console.log("n :" + n);
    return txt;
}