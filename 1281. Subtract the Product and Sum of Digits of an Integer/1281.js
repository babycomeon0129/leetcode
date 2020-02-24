var subtractProductAndSum = function(n) {
    let Product = 1;
    let Sum = 0;
    let Result = 0;
    var str = n.toString(); //轉成字串
    
    for (let i = 0 ; i <　str.length ; i++){
     Product =  Product * str[i];
     Sum += parseInt(str[i]) ; //字串無法相加用parseInt處理
    }

    Result = Product - Sum;
    
    return Result;
    
    
    
};
