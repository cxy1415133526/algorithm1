function isDaffodil(n){
    var gewei=n%10;
    var shiwei=parseInt(n/10)%10;
    var baiwei=parseInt(n/100);
    if(Math.pow(gewei,3)+Math.pow(shiwei,3)+Math.pow(baiwei,3)!=n){
        return false;
    }
    return true;
}
// console.log(isDaffodil(407));

var arr=[];
for(var i=0;i<10000;i++){
    if(isDaffodil(i)){
        arr.push(i);
    }
}
console.log(arr);
