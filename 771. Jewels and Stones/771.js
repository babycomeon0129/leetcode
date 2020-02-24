var numJewelsInStones = function(J, S) {
    J.split("");
    S.split("");
    var result = 0;
    
    for(let i = 0 ; i < S.length ; i++){
        for(let k =0 ; k < J.length ; k++){
            if(S[i]===J[k]){
                result++;
            }
            
        }
        
    }
    
    return result;
    
    
};
