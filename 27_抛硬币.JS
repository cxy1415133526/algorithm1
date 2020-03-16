//5. 【模拟抛硬币】模拟抛硬币一百万次，显示出现正面和反面的次数，并显示出占比。
var count=1000000;
var zm=0;
var fm=0;
while(count--){
    var n=Math.random();
    // 随机的概率有一半概率大于0.5，一半概率小于0.5
    // 如果随机出大于0.5的数字，就认为是正面。否则就是反面

    if(n>0.5){
        zm++;
    }else {
        fm++;
    }
     
}
console.log(zm,fm,zm/1000000,fm/1000000)  