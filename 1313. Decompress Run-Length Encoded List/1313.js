var decompressRLElist = function(nums) {
    
    let ansarr=[];
    
    for(let i = 0 ; i < nums.length ; i+=2){
        
        for(let j = 0 ; j < nums[i] ; j++){
            
            ansarr.push(nums[i+1]) ;
        }
        
    }
    
    return ansarr;
    
};
