//计算阶乘;1!+2!+3!+4!+5!+6!+7!+8!+9!
function factorial(n){
    if(n==1){
        return 1;
    }
    return n*factorial(n-1);
}
var sum=0;
for(var i=1;i<10;i++){
    sum+=factorial(i);
}
console.log(sum);

