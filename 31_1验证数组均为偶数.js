//【验证数组均为偶数】数组[6, 10, 12, 14, 88, 81, 100, 56]中是否每项都是偶数？
var arr=[6, 10, 12, 14, 88, 81, 100, 56];
// 打一个标记，这个标记称为flag
// 布尔值的变量命名，很多公司要求都要以is开头。
// 先认为数组中都是偶数
var isAllEven=(true);
for( var i=0;i<arr.length;i++){
    if(!arr[i]%2==0){               //只要有一个不是偶数，就
        isAllEven=false;
        break;
    }
}
// 判断flag，注意，布尔值的判断不需要写isAllEven == true
if (isAllEven) {
        console.log('数组均为偶数');
    } else {
        console.log('数组有奇数');
    }
    
