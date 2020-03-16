//请模拟双色球开奖，从1~33个数字中，随机选择6个，不能重复。输出不需要排序。
var result_arr=[];                              //先定义一个空白数组存储不重复的项
            
while(result_arr.length<6){
    var n=parseInt(Math.random()*33+1);         //随机生成一个数  根据公式 取值范围【a ，b】parseInt(Math.random()*（b-a+1）+a
    result_arr.push(n);
}
console.log(result_arr.length);
