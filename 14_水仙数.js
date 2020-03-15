//1的立方+5的立方+3的立方=153；
var sum = 0;
for (var i = 100; i <= 999; i++) {
    var gewei = i % 10;
    var shiwei = parseInt(i / 10) % 10;
    var baiwei = parseInt(i / 100);
    sum = Math.pow(gewei, 3) + Math.pow(shiwei, 3) + Math.pow(baiwei, 3);
    if (i == sum) {
        console.log(i);
    }
}