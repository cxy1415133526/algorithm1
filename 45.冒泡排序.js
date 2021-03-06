var arr = [33, 22, 11, 4, 8];

// 外层循环是趟数
for (var i = 0; i < arr.length - 1; i++) {
    // 内层循环是比较的次数，随着趟数增加，比较次数减少
    // 第0趟比较4次，第1趟比较3次，第2趟比较2次，第3趟比较1次
    for (var j = 0; j < arr.length - 1 - i; j++) {
        // 如果前面的数字大于了后面的数字
        if (arr[j] > arr[j + 1]) {
            // 那么就交换位置
            var temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);
