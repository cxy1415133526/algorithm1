//计算1*3*5*7*9****100的乘积；
var result=1;
for(var i=1;i<=100;i+=2){           //数相差2，所以边长每次加2；
    result*=i;
}
console.log(result);
