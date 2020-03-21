var a = 10;

function fun() {
    a++;
    if (a > 10) {
        var a = 9;
    }
}
fun();
console.log(a);//10
