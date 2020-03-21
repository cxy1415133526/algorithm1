function fun(o, n) {
    o.m++;
    n++;
}

var obj = { 'm': 10 };
var n = 10;

fun(obj, n);

console.log(obj.m, n)//11   10