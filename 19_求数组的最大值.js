var arr1 = [34,546,78,65,36,95];
//假设arr1[0]是最大值；
var max=arr1[0];
for (var i=1;i<arr1.length;i++){
    if(arr1[i]>max){
       max=arr1[i];
        
    } 
}
console.log(max);
