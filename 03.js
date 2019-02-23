function duplicate(nums,duplication){
    let n = nums.length;
    if (nums = null || n <= 0)
        return false;
    for (var i = 0; i < n; i++){
        while(nums[i] != i ){
            if(nums[i] = nums[nums[i]]){
                duplication[0] = nums[i];
                return true;
            }
           swap (nums,i,nums[i]);
        }
    }
    return false;
}

function swap (nums, i , j){
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}

module.exports = {
    duplicate : duplicate
};