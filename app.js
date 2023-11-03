const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What's your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description",
    },
    {
        type: "editor",
        name: "instructions",
        message: "Enter your installation instructions",
    },
    {
        type: "editor",
        name: "usage",
        message: "Enter your usage instructions",
    },
    {
        type: "input",
        name: "contributions",
        message: "Enter the contributios",
    },
    {
        type: "list",
        name: "license",
        message: "What type of license you prefer?",
        choices: ["ISC", "MIT"],
    },
];

function writeFile (filename, data){
    const content = generateMarkdown (data);
    fs.writeFile(filename, content, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File Created");
        }
    });
};

prompt(questions).then((answers) => {
    writeFile("README.md", answers);
});

// writeFile("README.md", {
//     title: "Reverent Cold Call App",
//     description: "Cold calling app using swift and express server",
//     instructions: "npm install\nnpm run dev\nnpm start\nnpm run call\n",
//     usage: 
//     "Start this here\n" +
//     "Create a project side in swift\n" +
//     "Set new code test\n" +
//     "Start server new\n" +
//     "Cool head for call\n",
//     contributions: "Aveej and Ivap",   
//     license: "MIT",
//   });