var sortArrayByParityII = function(A) {
    
    let result =[];
    let even = 0;
    let odd = 1;
    
   
        for(let i = 0 ; i < A.length ; i++){
            if(A[i]%2==0){
                result[even] = A[i];
                even+=2;
            }else{
                result[odd] = A[i];
                odd+=2;
                
            }
            
            
        }
        
        return result;
    
    
    
    
};
