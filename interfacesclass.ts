// special property of interfaces

interface user {
    name: string,
    age: number,
    greet(phrase: string): void
}

//now we are implementing on a class
class manager implements user {
    name: string;
    age: number;
    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    greet(phrase: string): void {
        console.log("heelo sir" + phrase);
    }
}