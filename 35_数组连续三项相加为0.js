//【数组连续3项相加为0】数组[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5]中有没有任意连续3项相加为0？如果有，请输出这3项。
var arr=[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5];
for (var i = 0; i < arr.length-3; i++) {
    var sum=0;   //累加器
    for(var j=0;j<3;j++){
        sum+=arr[i+j];
    }
    if(sum==0){
        //将每个结果看着一个字符串输出
        var str='';
        //向里面累加
        for(var j=0;j<3;j++){
            str+=' '+arr[i+j];
        }
        console.log(str);
    }    
}




// for(var i=0;i<arr.length-2;i++){
//     if(arr[i-1]+arr[i]+arr[i+1]==0){
//         console.log(`${arr[i-1]}\t${arr[i]}\t${arr[i+1]}`);
        
//     }
// }


