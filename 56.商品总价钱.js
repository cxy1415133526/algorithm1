// 闭包：函数返回一个函数，它是根据自己定义是所处的作用域，来访问此作用域中的变量，即使函数不在此作用域运行，它依然访问它定义所处的作用域的变量
// function fun() {
//     var a = 10;
//     return function () {
//         console.log(a);

//     };
// }
// var inn = fun();
// inn();
function fun() {
        var a = 10;
        return function () {
            console.log(a);
        };
    }
    
    var inn = fun();
    var a = 88;
    // inn函数运行的时候，会输出10，还是88？
    inn();
    

