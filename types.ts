// similar to interfaces and mostly does the same things
type user = {
    name: string,
    age: number
}

interface person {
    name: string,
    age: number
}


// above two are doiung the same things and when should we use what
// 1 interefaces can be implemeted by classees types are not
// 2 types let us do 4 more things

// union | a type can be  of either this or that ype
type Pincode = string | number;
let pincode: Pincode = "1104ert";
pincode = 1235;
pincode = "fwr4wf";

// 2 intersection
type manager = {
    name: string,
    age: number,
    start: string
}
type bigmanager={
    name: string,
    age: number,
    enddate: string
}
//this is called intersection only allowed in types
type supermanager = manager & bigmanager;

//now the super manager will look like this finally
// type supermanager = {
//     name: string,
//     age: number,
//     start: string,
//     enddate: string

// }
