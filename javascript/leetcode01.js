// 暴力解法，时间复杂度O(n^2)
// function twoSum(nums, target) {
//   for (i = 0; i < nums.length - 1; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return false;
// };

//一次哈希表，时间复杂度O(n)
//Map是基于哈希表的键值对存储数据结构，查询的时间复杂的为O(1)
var twoSum = function(nums, target) {
  var hashtable = new Map();
  for (i in nums) {
      var value = target - nums[i];
      if(hashtable.get(value)){
          return new Array(i,hashtable.get(value));
      }
      else{
          hashtable.set(nums[i],i);
      }
  }
};


let nums = [2, 4, 11, 5, 15, 24, 5];
let target = 10;
console.log(twoSum(nums, target))