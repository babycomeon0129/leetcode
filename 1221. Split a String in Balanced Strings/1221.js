var balancedStringSplit = function(s) {
    
    let result = 0
    let cut = 0
    
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === "L"){
            
            cut ++;
        }else{
            
            cut--;
        }
        
        
        if(cut==0){
            result++;
        }
        
    }
    
    return result;
    
    
    
};
