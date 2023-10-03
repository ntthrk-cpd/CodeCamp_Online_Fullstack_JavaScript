/*
 isEmpty(obj) 
 เช็ค obj มี properties ไหม 
    ถ้า'มี'ให้คืนค่า `true` 
    ถ้า'ไม่มี'ให้คืนค่า `false`
*/
function isEmpty(obj) {
    for (let key in obj) {        
        return true;
    }
    return false;
}