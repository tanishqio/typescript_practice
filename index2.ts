// 

function firstelement(arr:number[]){
    if(arr.length>0){
        // return arr[0]; //arr[0] feels that arr[0] can be undefined as ot doesnt uinderstand the if check
        // so it will always be having number or undefined as the return
        // fallback
        return arr[0]?? null;
    }
     return null;
}

firstelement([]);
firstelement([1,2,3,3]);
// we have declared the array of string in functioon explicitly so if anyting else goes inside it throws an error
// there is no return type of fucntion
// it either returns a number or null as the compiler knows that either it can find it in if
// or else to return null

let x=firstelement([]);

//it is currently can be number, null or undefined but we can use a fallback for undefined