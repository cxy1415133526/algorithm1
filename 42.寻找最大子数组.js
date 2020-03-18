// 【寻找最大子数组】 给定一个整数数组，找到一个具有最大和的子数组，返回其子数组最大和和这个子数组。
// 比如数组[−2, 2, −3, 4, −1, 2, 1, −5,]。符合要求的子数组为[4, −1, 2, 1]，其最大和为 6。
// 再比如数组[1, 2, 3, 4]，符合要求的子数组为[1, 2, 3, 4]，其最大和为 10。
// 再比如数组[-5, 6, -2, -3, 4]，符合要求的子数组为[6, -2, -3, 4]，其最大和为5。

var arr = [1, 5, 3, 9, 8,7, -2, -8, -4, -3];
var newarr = [];
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        newarr.push(arr[i]);      
    }else if(arr[i]<min){
        newarr.unshift(arr[i])
    }
}
for( var j=0;j<newarr.length-1;j++){
    if(newarr[j]>newarr[j+1]){
        var temp=newarr[j];
        newarr[j]=newarr[j+1];
        newarr[j+1]=temp;
        
    }
}
var resultarr=newarr.slice(newarr.length-4,newarr.length);

for( var j1=0;j1<resultarr.length-1;j1++){
    if(resultarr[j1]>resultarr[j1+1]){
        var temp=resultarr[j1];
        resultarr[j1]=resultarr[j1+1];
        resultarr[j1+1]=temp;
        
    }
}console.log(resultarr);

var sum=0;
for(var k=0;k<resultarr.length;k++){
    sum+=resultarr[k];
}
console.log(sum);
