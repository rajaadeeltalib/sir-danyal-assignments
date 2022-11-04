import promptSync from "prompt-sync";

const prompt = promptSync();

let fName = prompt("What is your name? ");

let age = prompt("What is your age? ")

let language = prompt("On which programing language are you working? ")

console.log(`Your name is ${fName}, you are ${Number(age)} years old and you are working on ${language}.`)