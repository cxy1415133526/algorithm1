//【数组连续3项相加为0】数组[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5]中有没有任意连续3项相加为0？如果有，请输出这3项。
var arr=[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5];
for(var i=0;i<arr.length-2;i++){
    if(arr[i-1]+arr[i]+arr[i+1]==0){
        console.log(`${arr[i-1]}\t${arr[i]}\t${arr[i+1]}`);
        
    }
}
// for(var j=0;j<arr.length-2;j++){
//     if(arr[j-2]+arr[j-1]+arr[j]==0){
//         console.log(`${arr[j-2]}\t${arr[j-1]}\t${arr[j]}`);
//     }
// }

