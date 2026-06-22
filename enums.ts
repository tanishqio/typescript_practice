// enums
// when we are making a game with up down left and right as keywordd



function dosomething(keyword:string){
    //code
}
dosomething("up");
dosomething("left");
dosomething("upbdb");
// now we can enter anything and it will not be checked until it is a string


// now is there can be a way that during compilation only we can get verefied that it is coorect or not
// and one of the ways is using type

type keys="up"|"down"|"left"|"right";
function dosomething1(keyword:keys){
    //code
}
dosomething1("up");
dosomething1("left");
//now it is showing error as ts is telling it can tbe used and we can found a bug in compilation itself
dosomething1("upbdb");

// but the better way of naming human readbale constants is using enumerations

enum direction{ //in js, enums does not exist
    up, // 0
    down, // 1
    left, // 2
    right // 3
}
// it is more cleaner syntax and we get suggestion when using direction

function doenums(keys:direction){
    if(keys==direction.left)
{}        // code 
}
doenums(direction.down);


// so when we will be conerting this ts code to js
// and console log direction.up and down we will be seeing 0 and 1 
// as these are numbers only which are used for comparison

// so enums is jsust a virtual concept or function in js which chnages these
// values into numbers and then use it

// much eaisre when we are working emums in ts
// and we can also give themm values instead o numbers explixitly
// but we have to giv ethem all

enum dir2{
    Up="up",
    Down="down"
}
// now when we conslole log up and down in js it will sow thier
// corresponding value only

// and we can start from a praticular number and then the others 
// below it will get automatically updated by 1

// the purpose of enums that we never have to use constant literals

// one of its use is making an enum of response codes so we can use it easier
// and its is standar use in express
