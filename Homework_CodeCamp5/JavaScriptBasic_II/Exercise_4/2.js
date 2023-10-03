function draw(n){
    
    let txt = '';
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            txt += '*';
        }
        txt += '\n';
    }
        
    console.log(txt);
    console.log("n :" + n);
    return txt;
}
