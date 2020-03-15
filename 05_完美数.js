//1000以内的完美数 6=1+2+3
for(var i=1;i<1000;i++){
    var sum=0;
    for(var j=1;j<i;j++){
        if(i%j==0){
            sum+=j;
        }
    }
    if(i==sum){
        console.log(i);
        
    }
}