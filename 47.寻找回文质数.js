function checkPrime(a) {
    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }

    }
    return true;
}
// console.log(checkPrime(12));
function checkHuiwen(a) {
    //将数字转为字符串
    var str = a.toString();
    //字符串也有length
    for (var i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// console.log(checkHuiwen(21)); 
//找到多少个数
var count = 0;
var str = '';
for (var i = 2; i < 100; i++) {
    if (checkPrime(i) && checkHuiwen(i)) {
        str += i + '\t';
        count++;
        if (count % 10 == 5) {
            console.log(str);
            str = ' '
        }

    }

}
