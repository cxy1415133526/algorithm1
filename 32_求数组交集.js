//【求数组交集】求数组[1, 3, 8, 10, 12]和数组[4, 2, 10, 1, 3, 9, 17, 3]的交集。
var arr = [1, 3, 8, 10, 12];
var _arr = [4, 2, 10, 1, 3, 9, 17, 3];
var result_arr=[];
for (var i = 0; i < _arr.length; i++) {
    if (arr.includes(_arr[i])){
        result_arr.push(_arr[i]);
    }
}
result_arr.pop();
console.log(result_arr.join(' '))
