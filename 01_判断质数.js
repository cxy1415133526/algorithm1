var a = 45887, count = 0;
for (var i = 1; i <= 45887; i++) {
    if (a % i == 0) {
        count++;
    }
   
}
if (count == 2) {
    console.log('45887是质数');

} else {
    console.log('45887不是质数');

}