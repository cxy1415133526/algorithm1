var result_arr=[];
var arr=[1, 1, 1, 1, 3, 3, 3, 2, 2, 2, 1, 2, 3];
//遍历arr数组里的每一项，就要用的for循环，看数组的数在不在结果数组里，如果不在才讲数push进去；
for(var i=0;i<arr.length;i++){
    //判断arr数组里的某一项在不在结果数组里，采用includes方法
    if(!result_arr.includes(arr[i])){
        result_arr.push(arr[i]);
    }
}
console.log(result_arr);
