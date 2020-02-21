/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    
 
    
   for(let i in A){
       A[i].reverse();
       for(let j in A[i]){
           A[i][j]=A[i][j]==0? 1:0;
       }
       
   }
    
    return A;
    
    
};
