//把一个函数返回一个函数，叫作高阶函数。如果高阶函数根据外部的函数参数，调整了内部函数的具体细节，这样的高阶函数也被称作“偏函数”
function fun(a){
    return function(b){
        if(b>a){
            console.log('体温异常，请隔离！');
            
        }else {
            console.log('体温正常，请放心');
            
        }
    }
}

var biaozhunxian1=fun(37.2);
biaozhunxian1(37);
biaozhunxian1(35);
biaozhunxian1(38.2);

var biaozhunxian2=fun(35.2);
biaozhunxian2(37);
biaozhunxian2(35);
biaozhunxian2(38.2);
