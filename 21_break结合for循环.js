// for( var i=1;i<5;i++){
//     if(i==3){
//         break;
//     }
// }
// // 如果循环是被break打断退出的，那么i一定不是5
// console.log(i);


//1~1000的质数
for( var i=2;i<1000;i++){
    for ( var j=2;j<=i-1;j++){
        if(i%j==0){
            break;
        }
    }
    if(i==j){
        console.log(j);
        
    }
}

// // 45887是不是质数
// var a =45887;
// for( var i=2;i<=a-1;i++){
//     if(a%i==0){
//         break;
//     }
    
// }
// if(a==i){
//     console.log(`${a}是质数`);
    
    
// }else{
//     console.log(`${a}不是质数`);
    
// }