// make a fucntion that return the first value of an arr
// which can be of either number or string type

type input=number|string;
function first(arr:input[]){
    return arr[0];
}
const value=first(["tanishq","bhakar"]);
console.log(value);
// but the problem in appraoch is this that if we 
// want to print the value in the uppercase
// which is a function in js and exsists
console.log(value.toUpperCase());

// so the problem that ts does not run any code and it just
// looks at the code and analyzes that this can be the output and the
// output can be a nnumbe ror string so number cant have uppercase function
// which is why it is showing error

// and one more problem is that we want the eother the array
// of number or string but as we are using type it can be of both which we dont wnat
const second=first([1,2,3,"fsd"]);
// and it has no problem with it

// how can we fix this problem and is their a better way??

// Generics -> enables us to create a component that works
// with any data type while stile providing compile-time type safety

// the most basic example to unserstand it is that

function identity(arg: number|string){
    return arg;
}
let op1=identity("mystring");
let op2=identity(200);
// not showing an error as we are explicitly telling that
// it is not possible 
