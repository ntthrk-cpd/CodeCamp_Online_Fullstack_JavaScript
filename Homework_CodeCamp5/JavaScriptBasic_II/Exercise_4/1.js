function draw(n){
    
    let txt = '';
    for(let i = 0; i < n; i++)
        txt += '*';

    console.log(txt);
    console.log("n :" + n);
    return txt;
}
