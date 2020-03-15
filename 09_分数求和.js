//  1/2+1/3+1/4+1/5+1/6
var sum = 1;
for (var i = 1; i <= 6; i++) {
    sum += 1 / (i + 1);
}
console.log(sum);