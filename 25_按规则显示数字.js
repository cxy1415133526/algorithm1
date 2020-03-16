//3. 【按规则显示数字】显示从100到1000之间所有既能被5整除，也能被6整除的数字，要求每行显示10个数字。
var count = 0;
var rowstr = '';
for (var i = 100; i < 1000; i++) {
    if (i % 30 == 0) {
        rowstr += i + ' ';
        count++;

        if (count == 10) {
            console.log(rowstr);
            rowstr = '';
            count = 0;
        }
    }
}
