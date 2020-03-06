var sortedSquares = function(A) {
    let B = A.map(e => {
    return e*e;
});
    
    function dec(X,Y){
    return X-Y;
}
    
    
   B=B.sort(function(x,y){
       return x-y;
   })
    
    return B;
    
};


