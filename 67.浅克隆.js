var arr1 = [1, 2, 3, 4, { 'm': 6 }];

var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
}

console.log(arr2);
// 大面上，是克隆了，结果是false
console.log(arr1 == arr2);           //false 代表克隆成功，但是里面的对象还是同一个。。。所有是浅克隆
// 但是藕断丝连，如果有对象、数组，仍然是内存中的同一个元素
// true
console.log(arr1[4] == arr2[4]);
