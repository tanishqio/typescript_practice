import { transpileModule } from "typescript"

interface user{
    name:string,
    class:string,
    age:number
}

let user1:user={
    name:"tanishq",
    class:"a",
    age:12
}
function islegal(user1:user):boolean{
if(user1.age>18) return true;
return false;
}

console.log(islegal(user1));