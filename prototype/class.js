class person{
    constructor(n, a, l){
        this.name = n;
        this.age = a;
        this.language = l;
    }
    bio(){
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I am working on ${this.language}.`);
    }
}
let person1 = new person("Adeel Talib", 41, "Javascript");
let person2 = new person("Malik Naseer Ahmed", 43, "Typescript")
person1.bio();
person2.bio();
