//【判断对称数组】数组[1, 3, 4, 5, 3, 5, 4, 3, 1]是不是对称的？
var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
// 立旗帜
var flag = (true);
for (var i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
        flag = flase;
    }

}
if(flag){
    console.log('对称');    
}else{
    console.log('不对称');
    
}
