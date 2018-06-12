var numberList = [-7, -3, -2, 8, 5];
var arrayLength;
var subZeroBoolean = false;
arrayLength = numberList.length;
document.getElementById("numberList").innerHTML = numberList.toString();
function subsetCalc(arr, arrayLength, sum) {
    //key value pair
    var subset = new Array();
    //cumulative sum to see if we've checked the number already
    var current_sum = 0;
    for (var i = 0; i < arrayLength; i++) {
        current_sum = arr[i];
        for (var j = i + 1; j < arrayLength; j++) {
            if (current_sum == sum) {
                subZeroBoolean = true;
                return;
            }
            current_sum += arr[j];
            document.write(current_sum + "</br>");
        }
    }
}
subsetCalc(numberList, arrayLength, 0);
if (subZeroBoolean) {
    document.getElementById("result").innerHTML = "Yes.";
}
else {
    document.getElementById("result").innerHTML = "No.";
}
