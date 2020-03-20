// 【按0的个数排序】，给你一个数组[1030, 56000, 20300040, 20, 8933, 28001020]。请将这个数组按各个数字含有零的数量进行排序，由少到多。
function ZeroSort(n){
    //将数字转为字符串再拆成数组
    var str=n.toString();
    var sum=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==0){
            sum++;
        }
    }
    return sum;
}

function bubbleSoft(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(ZeroSort(arr[j])>ZeroSort(arr[j+1])){//比较数组里每项含0的个数
                var tempt=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tempt;
            }
        }
    }
    return arr;
}
//法一：冒泡排序
var arr=[1030,56000,20300040,20,8933,28001020];
// var a=bubbleSoft(arr);
// console.log(a);
console.log(bubbleSoft(arr));

//法二：内置的sort排序
// var arr=[1030, 56000, 20300040, 20, 8933, 28001020];
// arr.sort(function(a,b){
//     return ZeroSort(a)-ZeroSort(b);
// })
// console.log(arr);
//