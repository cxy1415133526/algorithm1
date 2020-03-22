function isWmshu(i){
    var sum=0;
    for(var j=1;j<i;j++){
        if(i%j==0){
            sum+=j;
        }
    }
    if(i!=sum){
        return false;        
    }
    return true;
}
var i=1
while(i<1000){
    if(isWmshu(i)){
        console.log(i);
        
    }
    i++;
}
