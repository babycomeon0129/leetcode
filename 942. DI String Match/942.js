var diStringMatch = function(S) {
    
    var arrS =[];
    var arrans = [];
    
    for(let i = 0 ; i <=S.length; i++ ){
        arrS[i] = i ;
    }
    
    for(let i = 0 ; i <=S.length; i++ ){
        if(S[i] === "I"){
            arrans[i] = arrS.shift(i);
        }else{
            arrans[i] = arrS.pop(i);
        }
    }
    
    return arrans;
    
};
