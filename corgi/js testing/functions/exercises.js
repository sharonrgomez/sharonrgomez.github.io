// printReverse()
// print out the elements in reverse order
function printReverse(arr){
  for (var i=arr.length; i>=0; i--){
    console.log(arr[i]);
  }
}

// isUniform()
// return true only if all elements' values are identical
function isUniform(arr){
  var isEqual;
  arr.forEach(function(i){
    isEqual=arr.every(function(n) {
      return n===arr[i];
    });
  });
  return isEqual;
}

// sumArray()
// return the sum of all elements
function sumArray(arr){
  var sum;
  arr.forEach(function(i){
    sum+=arr[i];
  });
  return sum;
}

// max()
// return the highest number in an array
function max(arr){
  var max = arr[0];
  arr.forEach(function(i){
    if(max<arr[i]){
      max=arr[i];
    }
  });
  console.log(max);
}
