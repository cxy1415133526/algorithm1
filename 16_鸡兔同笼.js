// 题目：鸡兔同笼，一共有35个头，94个脚，请问有多少只鸡和兔子？
for(var ji=0;ji<=35;ji++){
    var tu=35-ji;
    if(4*ji+2*tu==94){
        console.log(`鸡:${ji}只，兔：${tu}只`);
        
    }
}