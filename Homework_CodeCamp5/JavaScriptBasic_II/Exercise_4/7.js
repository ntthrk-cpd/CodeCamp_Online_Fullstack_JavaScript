function draw(n){
    let txt = '';
    let count = n * n;

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            txt += count;
            count--;
        }
        txt += '\n';
    }
        
    console.log(txt);
    console.log("n :" + n);
    return txt;
}
