#! /usr/bin/env node
import inquirer from "inquirer"
let todos = []
let condition = true;
while(condition)
{let todoQuestions= await inquirer.prompt(
    [
    {
        name:"questionFirst",
        type:"input",
        message:"would you like to add in you todos?"
    },
    {
    name:"questionSecond",
    type:"confirm",
    message:"would you like to add more in your todos?",
    default:"true"
    }
    ]
);
todos.push(todoQuestions.questionFirst);
console.log(todos)
condition = todoQuestions.questionSecond;
}

