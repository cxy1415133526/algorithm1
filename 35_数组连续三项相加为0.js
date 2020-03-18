//【数组连续3项相加为0】数组[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5]中有没有任意连续3项相加为0？如果有，请输出这3项。
var arr=[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5];
var sum=0;
var count=0;
for (var i=0;i<arr.length;i++){
    arr.splice(i,1);
    i--;
    // console.log(a);
    sum+=a;    
    count++;
    if(count==3){
        console.log(arr[0]);
        sum=0;
        count=0
    }
    

}
