alert
(
`JAVASCRIPT QUIZ
Online Test: JAVASCRIPT Programming Test
Number of questions: 05
Total Marks: 50
Instructions:
Select your correct answer and enter only number value like 1 or 2 or 3`
)
let questions = [
        {
            quiz: `How do you write "Welcome!" in an alert box?
            1. alert("Welcome!"); 
            2. alertBox("Welcome!");
            3. msgBox("Welcome!");`,
            correctAnswer: 1
        },
        {
            quiz: `How can you add a comment in a JavaScript?
            1. 'this will print 20'; 
            2. //this will print 20;
            3. <!--this will print 20;`,
            correctAnswer: 2
        },
        {
            quiz: `Which operator is used to assign a value to a variable?
            1. *; 
            2. +;
            3. =;`,
            correctAnswer: 3
        },
        {
            quiz: `What is the correct way to write a JavaScript array?
            1. var cars = ["toyota", "suzuki", "honda"] ; 
            2. var cars = (1:"toyota", 2:"suzuki", 3:"honda");
            3. var cars = "toyota", "suzuki", "honda";`,
            correctAnswer: 1
        },
        {
            quiz: `How do you create a function in JavaScript?
            1. function = calFunction(); 
            2. function:calFunction();
            3. function calFunction();`,
            correctAnswer: 3
        },
    ];
    let marks = 0;
    for (let i = 0; i < questions.length; i++){
        let userInput = window.prompt(questions[i].quiz);
        if(userInput == questions[i].correctAnswer)
        {
            marks+=10;
        }
    }
   
    alert
    (
    `Result: 
    Your have got ${marks} marks in this test`
    )   
    