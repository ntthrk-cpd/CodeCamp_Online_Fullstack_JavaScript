function draw(n){
    let txt = ''; 
    let k = 0;
    let count = 1;

    for(let i = n; i > 1; i--) {
        for(let j = 1; j < n*2; j++) {
            if (j <= n) {
                if (i > j)
                    txt += '_';
                else {
                    txt += count;
                    count++;
 
                } 
            }
            else {
                if ((k + n) < (j))
                    txt += '_';
                else {
                    txt += count;
                    count++;
    
                } 
            }
        }
        txt += '\n';
        k++;
    }
    k = n;
    for(let i = 0; i < n; i++) {
        for(let j = 1; j < n*2; j++) {
            if (j <= n) {
                if (i < j){
                    txt += count;
                    count++;
    
                } 
                else
                    txt += "_";
            } 
            else {
                if ((k + n) > (j)){
                    txt += count;
                    count++;
    
                } 
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