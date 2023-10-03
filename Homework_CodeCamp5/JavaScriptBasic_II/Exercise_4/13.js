function draw(n){
    let txt = '';
    
    for(let i = 0; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if (i < j)
                txt += '_';
            else
                txt += "*";
        }
        txt += '\n';
    }
        
    console.log(txt);
    console.log("n :" + n);
    return txt;
}