var moveZeroes = function(nums) {
    
    let zero = 0;
    for(let i = nums.length ; i >= 0 ; i--){
        if(nums[i]===0){
            nums.splice(i,1);
            nums.push(0);
        }
        
        
    }
    
 
    return nums;
    
    
    
    
};
