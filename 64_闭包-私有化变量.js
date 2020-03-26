// 把a进行保护，你要想访问它，必须通过我们预先设置好的函数。getA函数来访问a，add函数来更改a。

function fun() {
    var a = 10;
    return {               //返回的是一个对象，对象打点某属性，数组用下标访问某项 对象是obj。
        getA: function () {
            a++;
            console.log(a);
        },  //对象用逗号隔开里面的键值对
        add:function(){
            a++;
        }
    }

}
//这是主代码，调用上面的函数
var obj = fun();
var a = 100;
obj.getA();
obj.add();
obj.getA();
