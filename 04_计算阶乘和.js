var sum = 0;
for (var i = 1; i <= 9; i++) {
    var result = 1;
    for (var j = 1; j <= i; j++) {
        result *= j;
    }
    sum += result;    
}console.log(sum);