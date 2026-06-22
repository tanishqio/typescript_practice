//  in ts we use modern syntax for importing and exporting and we do it as this
import mongoose from "mongoose";

const userschema =new mongoose.Schema({
    name:String,
    age:String
});

export const usermodel=mongoose.model("user",userschema);

// how to use it in another file
// import{usermodel} from "./models";

// we can also defalult export and then we dont have to use brakcets
const todoschema = new mongoose.Schema({
    name:String,
    age:String
});
const todomodel=mongoose.model("todo",todoschema);
export default todomodel;

// now in another file we can use it as
// import todomodel from "./models";