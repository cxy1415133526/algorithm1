// 引入内置模块，并且存为rl变量。require表示引入。
var readline = require('readline');

// 创建一个读取接口，这段代码来自nodejs官网手册
// https://nodejs.org/api/readline.html
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 提出问题，rl.question函数就是提出问题。逗号之前是问题，逗号之后是回调函数
// 回调函数就是用户输入之后做的事情，参数a就是用户输入的数字。
rl.question('请输入一个数字', function (n) {
            var result=1,sum=1;
         for(var i=1;i<=n;i++){
             result*=i/(i*2+1);
             sum+=result;
             p=sum*2;
         }
         console.log(p);
         
});
