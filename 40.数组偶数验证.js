function isEven(n){
return n%2==0;
}
var arr=[6, 10, 12, 14, 88, 81, 100, 56];
for(var i=0;i<arr.length;i++){
    if(isEven(arr[i])){
        console.log(arr[i]);        
    }
}