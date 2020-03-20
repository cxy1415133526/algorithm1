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
var arr=[1, 5, 3, 9, 8,7, -2, -8, -4, -3];
var _arr=quickSort(arr);
var newArr=_arr.slice(0,6);//提取哪一项，就将它的下标放里面，包含开始项，但不包含最后一项
console.log(newArr);
