// var arr = [33, 22, 11, 4, 8]; 
// arr.sort();
// console.log(arr);

var arr=[33, 22, 11, 4, 8];
arr.sort(function(a,b){
    // 如果靠前的数字小于靠后的数字，那么就交换位置
    // 言外之意就是要求数组从大到小排序

    return b-a;
})
console.log(arr);
