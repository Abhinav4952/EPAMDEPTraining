/*
Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas.
Remember that the resulting composed function may be passed multiple arguments!
*/
function compose(...args) {
    return function(n){
        var result=n;
        while(args.length!==0)
        {
            result = args.pop()(result);
        }
        return result;
    }
};

