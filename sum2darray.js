 var array=[[10],[30]]
var sum = 0;
for (var i = 0; i <=array.length-1; i++)
    for (var j = 0; j < array[i].length; j++) {
        console.log(array[j][i]);
        sum += array[j][i];
    }

console.log(sum)
