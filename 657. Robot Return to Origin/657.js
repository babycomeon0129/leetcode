var judgeCircle = function(moves) {
    
    let up = 0;
    let left =0;
    let result = false;
    
    
    for(let i = 0 ; i < moves.length ; i++ ){
        if(moves[i]==="U"){
            up++;
        }else if(moves[i]==="D"){
            up--;
        }else if(moves[i]==="L"){
            left++;
        }else{
            left--;
        }
        
        
    }
    
    
    if(up==0 & left ==0){
        result = true;
    }
    
    
    return result;
    
    
};
