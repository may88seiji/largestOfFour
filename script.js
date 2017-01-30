
function largestOfFour(arr) {
  var newArray = [];
  var max = 0;
  for(var i = 0; i < arr.length; i++){
      for(var j = 0 ; j < arr.length; j++){
        if(max < arr[i][j]){
          max = arr[i][j];
        }
        if( j === arr.length-1){
        newArray.push(max);
          max = 0;
        }
      }
  }
  return newArray;
}

function largestOfFour(arr) {
  return arr.map(function(subArr){
    return subArr.reduce(function(x,y){
      return Math.max(x,y);
    })
  }).join(',');
}


largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);