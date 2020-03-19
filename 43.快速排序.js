function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var a=arr[0];//定义个标杆
    var big=[];
    var small=[];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>a){
            big.push(arr[i]);
        }else{
            small.push(arr[i]);
        }
    }
    return quickSort(small).concat(a,quickSort(big));
    
}
console.log(quickSort([1, 5, 3, 9, 8,7, -2, -8, -4, -3]));
var _arr=arr.slice(arr.length-4,arr.length);
console.log(_arr);
