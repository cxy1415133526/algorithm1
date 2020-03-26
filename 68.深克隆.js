function deepClone(o) {
    if (Array.isArray(o)) {
        // 如果是数组
        //准备一个空数组
        var result = [];
        // 遍历传进来的这个数组，进行浅克隆，但是每项都要重新经过deepClone函数，放到结果数组中
        for (var i = 0; i < o.length; i++) {
            result.push(deepClone(o[i]));
        }
    } else if (typeof o == 'object') {
        // 否则如果是个对象
        var result={};
        // 每项都要重新经过deepClone函数，放到空对象中！
        for(var k in o){
            result[k]=deepClone(o[k]);
        }
    }else{
        // 是普通值，就是数字、字符串、布尔
        // result就是它自己，就不用递归了
        var result=o;
    }
    return result;
}
var arr1=[1,2,3,{'m':3,'n':[4,5,6]}];
var arr2=deepClone(arr1);        
console.log(arr2);        
console.log(arr1==arr2);                       //false 不相等，说明不是内存中的同一对象，分开了
console.log(arr1[3].n==arr2[3].n);             //false 不相等，说明不是内存中的同一对象，分开了


