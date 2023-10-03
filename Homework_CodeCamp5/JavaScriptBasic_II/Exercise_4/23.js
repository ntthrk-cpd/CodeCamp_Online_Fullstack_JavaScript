function draw(n){
    let txt = ''; 
    let k = 0;

    for(let i = n; i > 1; i--) {
        for(let j = 1; j < n*2; j++) {
            if (j <= n) {
                if (i > j)
                    txt += '_';
                else
                    txt += "*";
            } 
            else {
                if ((k + n) < (j))
                    txt += '_';
                else 
                    txt +="*";
            }
        }
        txt += '\n';
        k++;
    }
    k = n;
    for(let i = 0; i < n; i++) {
        for(let j = 1; j < n*2; j++) {
            if (j <= n) {
                if (i < j)
                    txt += '*';
                else
                    txt += "_";
            } 
            else {
                if ((k + n) > (j))
                    txt += '*';
                else 
                    txt +="_";
            }
        }
        txt += '\n';
        k--;
    }

    console.log(txt);
    console.log("n :" + n);
    return txt;
}