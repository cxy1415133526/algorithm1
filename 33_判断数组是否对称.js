//【判断对称数组】数组[1, 3, 4, 5, 3, 5, 4, 3, 1]是不是对称的？
var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
var _arr = []
for (var i = 0; i < arr.length; i++) {
    _arr.unshift(arr[i]);       // 颠倒数组里的项，看它们的字符串是否相等
}
var arr_str=arr.join('');   
var _arr_str=_arr.join('');
if(arr_str==_arr_str){
    console.log('对称');   
}else{
    console.log('不对称');
    
}




