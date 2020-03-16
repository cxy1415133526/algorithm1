//【验证数组均为偶数】数组[6, 10, 12, 14, 88, 81, 100, 56]中是否每项都是偶数？
var arr=[6, 10, 12, 14, 88, 81, 100, 56];
var result_arr=[];
for( var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        result_arr.push(arr[i]);
                
    }        
} 
var a=arr.length-result_arr.length;
if(a==0){
    console.log('均为偶数');
    
}else{
    console.log(`有${a}项不是偶数`);
    
}
