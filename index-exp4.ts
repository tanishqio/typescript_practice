import express from "express";
const app=express();
app.use(express.json());

//this interface is used to create a complex object in ts and can be used to create more complex ones   
interface signedinput{
    username:string,
    password:string
}

//now one doubt comes that why do we need zod now, if user adds something worng it will be done using interface and some kind
// of error will be throewn

//its ans is that ts code only runs during compilation and then it is converted to js and js does not have this , hence
// we need zod for runtime checking


app.post("/signup",(req,res)=>{
    const body:signedinput=req.body;
    //push to db
// only thing it is helping is to use this easily
    body.password

    res.json({
        message:"signed up"
    })
})
app.listen(3000);
