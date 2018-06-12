var numberList: number[] = [-7,-3,-2,8,5];
var arrayLength: number = numberList.length;
var subZeroBoolean: boolean = false;

document.getElementById("numberList").innerHTML = numberList.toString();

function subsetCalc(arr, arrayLength, sum)
{
    //key value pair
    var subset = [[]];

    for (var i = 0; i < arrayLength; i++)
    {
        for (var j = 0, len = subset.length; j < len; j++)
        {
          var temp = subset[j].concat(arr[i]);
          subset.push(temp);
          var s = temp.reduce(function(x, y) { return x + y; });
          document.write("array: " + arr[i] + " || subset: " + subset[j] + " || temp: " + temp +" || s: " + s +"</br>");
          if (s === sum)
          {
            subZeroBoolean = true;
            return;
          }

        }

    }
}

subsetCalc(numberList,arrayLength,0);

document.write("</br> Is there a non-empty subset whose sum is zero? </br>");
if (subZeroBoolean)
{
    document.write("Yes.");
}
else
{
    document.getElementById("result").innerHTML = "No.";
}
