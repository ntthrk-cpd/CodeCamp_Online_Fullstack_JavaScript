function draw(n){
    
    let txt = '';
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            txt += i;
        }
        txt += '\n';
    }
        
    console.log(txt);
    console.log("n :" + n);
    return txt;
}
