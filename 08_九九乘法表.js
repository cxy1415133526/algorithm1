for(var i=1;i<=9;i++){
    var str='';
    for(j=1;j<=i;j++){
        str+=`${i}*${j}=${i*j}\t`       
                                        //如果将输出放在这里，则会将之前的结果再输出一次
    }
    console.log(str);
}