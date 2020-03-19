// 【统计数字中0的个数】请封装一个函数calcZero()，它接受1个参数：数字n。函数的功能是统计这个数字中0的个数。比如calcZero(1030)结果应该是2，因为它有2个零；再比如calcZero(0)结果应该是1，因为它有1个零；再比如calcZero(6)结果应该是0，因为它有0个零。

function calcZero(n){
    //将数字拆成字符串
    var str=n.toString();
    var sum=0;
    for(var i=0;i<str.length;i++){
        //判断它里面有没有0
        if(str[i]==0){
            
           sum++
        }
    }
    return sum;
}
var findZero=calcZero(503060);
console.log(findZero);


