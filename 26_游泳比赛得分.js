var arr = [39, 45, 42, 44, 51, 48];
var min = arr[0];
var max = arr[0];
var avg=0;
var sum=arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    } else if (arr[i] > max) {
        max = arr[i];
    }
    sum+=arr[i];
    avg=(sum-arr[0]-arr[4])/(arr.length-2);

}
console.log(avg);

