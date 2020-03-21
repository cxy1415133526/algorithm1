// 各国治愈数
var obj = {
    '意大利': 4400,
    '美国': 1107,
    '德国': 115,
    '法国': 1300
}
//对象不能排序，需要变成数组
var arr = [];
for (var k in obj) {  //键名的代号是k，此时循环语句依次让k成为上面的4个属性名，循环体内的obj[k]依次是上面的4个属性值。
    arr.push({'country':k,'number': obj[k]})
}
arr.sort(function (a, b) {
    return b.number - a.number
})
//遍历数组
for(var i=0;i<arr.length;i++){
    console.log(`第${i+1}名是：${arr[i].country}治愈了${arr[i].number}人`);
    
}


