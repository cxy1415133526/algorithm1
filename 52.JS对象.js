//对象的属性名可以用数字/中文来命名 ；需要注意的访问这些不规则属性时不能打点，需要方括号表示法。访问的有中文还需要用引号引起来。
var obj={
    0:1,
    儿童:2,
    c:3,
    d:4
};
// console.log(obj[0]);
// console.log(obj['儿童']);

//动态建
// var k='c';
// console.log(obj[k]);//不能写成console.log(obj.k);因为对象obj中没有k的属性。 

//遍历对象
for(var k in obj){
    console.log(`${k}的属性值${obj[k]}`);
    
}