var twoSum = function(nums, target) {
    
    var newnums = [];
    
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j < nums.length ; j++){
            if(nums[i]+nums[j]==target){
                newnums[0]=i;
                newnums[1]=j;
            }
        }
    }
    
    return newnums
};

