// first program

function greetname(firstname){
    console.log("Hello"+firstname);
}
// the problem is that we have not gven type to firstname
// we are using any type of first name which can be anythinng
// we have given it implictly any type so the error is either give it explictly any type


function greetname1(firstname: string){
    console.log("Hello"+firstname);
}
greetname1("tnais");
//this is how we give expllicitly type like this and we need to give types to
// functional arguments also

// types can be
// number
// string
// boolean

function sum(a:number,b:number){
    return a+b;
}
let x=1; //type inferencce
let y=3;
console.log(sum(x,y));

// the above code will still work as we have not given type x to y becz
// using inference it detects that it is a number
// but in functional parameter it can infer so we have to explicitly tell it

