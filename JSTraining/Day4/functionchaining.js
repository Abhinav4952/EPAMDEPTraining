/*
We want to create a function that will add numbers together when called in succession.
*/
function add(x){

 let sum = x;
    function resultFn(y){
        sum += y;
        return resultFn;
    }
    resultFn.valueOf = function(){
            return sum;
        };
    return resultFn;
}

