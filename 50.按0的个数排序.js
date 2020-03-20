// 【按0的个数排序】，给你一个数组[1030, 56000, 20300040, 20, 8933, 28001020]。请将这个数组按各个数字含有零的数量进行排序，由少到多。
function ZeroSort(n){
    //将数字转为字符串再拆成数组
    var arr=n.toString().split('');
    var sum=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==0){
            sum++;
        }
    }
    return sum;
}
function bubbleSoft(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(ZeroSort(arr[j])>ZeroSort(arr[j+1])){
                var tempt=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tempt;
            }
        }
    }
    return arr;
}
var arr=[1030,56000,20300040,20,8933,28001020];
var a=bubbleSoft(arr);
console.log(a);
