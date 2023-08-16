#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import {createSpinner} from 'nanospinner';

//sleep function
const sleep = () => {
    return new Promise((r) =>
     {setTimeout(r,2000)});
};
//spin
async function spinAct(){
  const spinner = createSpinner('OK! your result...').start();
  await sleep();
  spinner.stop();
};
//HEADING
async function welcome(){
    let title = chalkAnimation.neon("Rapidquiz"); //start heading
    await sleep();
    title.stop();
}
//Rules
function rules(){
    console.log("\n");
    sleep();
    console.log(`${chalk.green('Game Rules:')} 
                 ${chalk.yellow("1. You will be given some multiple choice questions on general knowledge")}
                 ${chalk.yellow("2. And a result with percentage and remarks will be shown at the end of quiz.")}`)
                 console.log("\n") 
    }
//REMARKS 
    async function remark(value: number) {
      if(value >= 80){
          console.log(chalk.blue("Great job! you have good Knowledge"));
      }
      else if (value < 80 && value >= 60){
        console.log (chalk.blue("Good!"));
      }
      else if (value < 60 && value >= 50){
        console.log (chalk.blue("Work hard! you can improve"));
      }
      else{
        console.log(chalk.blue("OOPS! you should read newspapers and books"))
      }
    }    

    let questions = [
      {
        type: "list",
        name: "Q0",
        message: "Nelson Mandela was the president of which country?\n",
        choices: ["Nigeria", "South Africa", "Sudan","Congo"],
        Answer: "South Africa"
      },
      {
         type: "list",
         name: "Q1",
         message: "Entomology is the science that studies \n",
         choices: ["Behavior of human beings","Cuture and society","Insects","The formation of rocks"],
         Answer: "Insects"
       },
       {
        type: "list",
        name: "Q2",
        message: " When was the Gas discovered from sui? \n",
        choices: ["1950", "1953", "1954", "1952"],
        Answer: "1952"
      },
      {
        type: "list",
        name: "Q3",
        message: " The artificial intelligence chatbot “Bard” is developed by \n",
        choices: ["Google", "Microsoft", "Facebook", "Twitter"],
        Answer: "Google"
      },
      {
        type: "list",
        name: "Q4",
        message: " The headquarter of FIFA is located in which city? \n",
        choices: ["Athens, Greece", "Zurich, Switzerland", "Newyork, USA", "London, UK"],
        Answer: "Zurich, Switzerland"
      },
      {
        type: "list",
        name: "Q5",
        message: "1917 is known for: \n",
        choices: ["Battle of Trafalgar", "Battle of Waterloo","End of the World War I","The Russian Revolution"],
        Answer: "The Russian Revolution"
      },
      {
        type: "list",
        name: "Q6",
        message: "The United States’ state of “Alaska” shares maritime border with Canada and \n",
        choices: ["Mexico", "Iceland", "Greenland", "Russia"],
        Answer: "Russia"
      },
      {
        type: "list",
        name: "Q7",
        message: "The most abundant element in the universe is: \n",
        choices: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Silicon"],
        Answer: "Hydrogen"
      },
      {
        type: "list",
        name: "Q8",
        message: "Java Script was first released in \n",
        choices: ["1975", "1980", "1987","1995"],
        Answer: "1995"
      },
      {
        type: "list",
        name: "Q9",
        message: "Which programming language is used by Unity game engine as its primary scripting language\n",
        choices: ["Java","Visual C++","Visual Basic"," Visual C# "],
        Answer: " Visual C# "
      },
      ]
    
async function Askingquestion(){
let marks = 0;
let i = 0;
while(i <= 9){

  const select = await inquirer.prompt([questions[i]]);
  let options = [select.Q0, select.Q1, select.Q2, select.Q3, select.Q4, select.Q5,select.Q6, select.Q7, select.Q8, select.Q9];
      if(options[i] == questions[i].Answer){
              marks = marks + 1;
            };
      i++;
}
return marks;
}




await welcome();
rules();
let result = await Askingquestion();
await spinAct();
let percentage = (result/10)*100;
console.log(chalk.green(`Your percentage is ${percentage}`));




await remark(percentage);







