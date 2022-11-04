import promptSync from "prompt-sync";

const prompt = promptSync();

let num1 = Number(prompt("Please Enter Your First Number "));

let operator = prompt("Please Enter Your Operator, ( *, +, -, / ) ");

let num2 = Number(prompt("Please Enter Your Second Number "));

if(operator === "*")
{
console.log(`${num1} * ${num2} = ${num1 * num2}`)
}
else if(operator === "+")
{
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
}
else if(operator === "-")
{
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
}else if(operator === "/")
{
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
}else
{
    console.log("Your have entered wrong value")
}