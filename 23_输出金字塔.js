// 1. 【数字金字塔】使用for循环语句输出下面的图形
//循环6次
for(var i=1;i<=6;i++){
    // 每行的字符串
    var row_str='';
    // // 追加空格
    row_str+=' '.repeat(12-i*2);
       // 追加左半部分
    for(var j=i;j>=1;j--){
        row_str+=j+' ';        
    } 
      // 追加右半部分
    for(var j=2;j<=i;j++){
        row_str+=j+' ';        
    } console.log(row_str);
    
 }
