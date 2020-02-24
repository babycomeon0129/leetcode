var sortArrayByParity = function(A) {
    
  let result = [];
  for(let i = A.length ; i > 0 ; i--){
      if(A[i]%2==0){
          result.push(A[i]);
          A.splice(i,1);
          
      }
      
  }  
    
    
 for(let i = 0 ; i <　A.length ; i++){
     result.push(A[i]);
 }
    
      
    
    
    return result;
    
   
};
