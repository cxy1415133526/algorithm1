var arr = [1, 1, 2, 3, 5, 5, 6,5, 8];
var result = [];
for (var i = 0; i < arr.length; i++) {
    if(result.indexOf(arr[i])==-1){
        result+=arr[i];
    }
}
console.log(result);