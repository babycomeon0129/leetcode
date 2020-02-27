var searchInsert = function(nums, target) {
    
    let result = 0;
    
    
    if(nums.indexOf(target) !== -1){
        return nums.indexOf(target);
    }else{
        
        for(let i = 0 ; i < nums.length ; i++){
            if(nums[i] < target){
                result ++;
                
            }
            
        }
        
        return result;
    }
    
};
