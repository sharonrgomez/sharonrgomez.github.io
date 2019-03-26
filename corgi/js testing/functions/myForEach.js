// using forEach to loop through array
var cols=["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// nums.forEach(function(i){
//   console.log(nums[i]);
// }

// without using forEach, instead passing the arr as an argument in my own func
function myForEach(arr, func){
  for (var i=0; i<arr.length; i++){
    func(arr[i]);
  }
}
