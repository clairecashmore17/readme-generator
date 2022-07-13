// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//import generateMarkdown package
const generateMarkdown = require("./utils/generateMarkdown.js");
//import our write file with promises
const writeFile = require('./utils/writeFile');
const fs = require('fs');

// // TODO: Create an array of questions for user input
const questionsInput = [
    "What is your project title? (Required):",
    "What is your project description?(Required)",
    "What are the installation instructions?(Required)",
    "What is the usage of your project?(Required)",
    "What are the contributtion guidelines?(Required)",
    "What are the test instructions?",
    "What is your Github username?",
    "What is your email address?"
];
const questionInputName = [
    "title",
    "description",
    "install",
    "usage",
    "contribution",
    "test",
    "gitName",
    "email"
];  

//****MOCK DATA**********/
readMeMock = {
    title: 'Taskinator',
    description: 'Manage your schedule through a dynamically updating, online task manager. Add, remove, or complete any of your daily tasks!',
    install: 'To install this, simply copy the repository and keep on hand in your local files. Use with local storage! Or, navigate to the deployment page to have everything online and ready.',
    usage: 'usage is for people in need of specific task management apps',
    contribution: 'To make a contribution, simply fork the project, add your updates, and make a pull request for our admins to view',
    test: 'to test, simply fork, and test on your own',
    gitName: 'clairecashmore17',
    email: 'cbear5@live.com',
    license: 'MIT'

};
//function to prompt user for information
const promptUser = readmeData => {
    console.log("prompting user")
    // if we dont have any past readme data, then create an empty array
    //*****WE MIGHT NOT NEED THIS*********/
        if(!readmeData){
            readmeData = [];
        }
    // **********************************
        return inquirer.prompt([
        {
            //project title
            type: 'input',
            name: questionInputName[0],
            message: questionsInput[0],
            validate: title => {
                if(title){
                    return true;
                }
                else {
                    console.log("You must provide an answer!");
                    return false;
                }
            }
        },
        {
            //description
            type: 'input',
            name: questionInputName[1],
            message: questionsInput[1],
            validate: description => {
                if(description){
                    return true;
                }
                else {
                    console.log("You must provide an answer!");
                    return false;
                }
            }
        },  
        {
            // install instructions
            type: 'input',
            name: questionInputName[2],
            message: questionsInput[2],
            validate: installInstructions => {
                if(installInstructions){
                    return true;
                }
                else {
                    console.log("You must provide an answer!");
                    return false;
                }
            }
        },
        {
            //usage
            type: 'input',
            name: questionInputName[3],
            message: questionsInput[3],
            validate: usage => {
                if(usage){
                    return true;
                }
                else {
                    console.log("You must provide an answer!");
                    return false;
                }
            }
        },
        {
            //contribution
            type: 'input',
            name: questionInputName[4],
            message: questionsInput[4],
            validate: contribution => {
                if(contribution){
                    return true;
                }
                else {
                    console.log("You must provide an answer!");
                    return false;
                }
            }
        },
        {
            //test instructions
            type: 'input',
            name: questionInputName[5],
            message: questionsInput[5],
            validate: testInstructions => {
                if(testInstructions){
                    return true;
                }
                else {
                    console.log("You must provide an answer!");
                    return false;
                }
            }
        },
        {
            //git username
            type: 'input',
            name: questionInputName[6],
            message: questionsInput[6],
            validate: gitUsername => {
                if(gitUsername){
                    return true;
                }
                else {
                    console.log("You must provide an answer!");
                    return false;
                }
            }
        },
        {
            //email address
            type: 'input',
            name: questionInputName[7],
            message: questionsInput[7],
            validate: email => {
                if(email){
                    return true;
                }
                else {
                    console.log("You must provide an answer!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license?',
            default: true
        },
        {
            //license
            type: 'checkbox',
            name: 'license',
            message: "What license did you use?",
            choices: ["MIT", "Apache", "Boost", "BSD 3", "CC0","EPL","GNU v3", "IBM", "ISC", "MPL", "ODC", "ODbL","Perl","OFL", "Unlicense", "WTFPL"]
        }
        ])
        .then(userData => {
            console.log(userData);
            //saving our data into another array to send to generate markdown
            readmeData.push(userData);
            return readmeData;
        })
    
};

promptUser()
.then(readmeData => {
    // console.log(readMeMock);
    const readMeData = generateMarkdown(readmeData);
    fs.writeFile('./dist/README.md', readMeData, err => {
        if(err) throw new Error(err);
        console.log('completed readme, look at generated file');
    })
})
