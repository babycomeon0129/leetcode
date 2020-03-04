var smallerNumbersThanCurrent = function(nums) {
    
    let arr = [];
    let result = [];
    
    for(let i = 0 ; i < nums.length ; i++){
        
        arr=nums.filter(e=>e<nums[i]);
        result[i]=arr.length
        
        
        
    }
    
    return result;
    
};
