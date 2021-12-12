const fs = require('fs');
const inquirer = require('inquirer');

const pageTemplate = require('./src/page-template.js');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const idArray = [];

const teamMembers = [];


function gettingStarted() {

  function createEmployee() {
    console.log('Please, add your team');
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name (Required):",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a name.";
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID (Required):",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid number.";
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's e-mail (Required):",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid e-mail address.";
        }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team employee's office number?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid office number.";
        }
      },
      {
        type: 'confirm',
        name: 'confirmMembers',
        message: 'Would you like to add more team members?'
      },
    ]).then(answers => {
      const employee = new Employee(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(employee);
    })
  }
}


function addTeamInfo() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'memberRole',
      message: 'Choose the team member role:',
      choices: [
        'Engineer',
        'Inter',
        'Team is complete'
      ]
    },
    {
      type: 'input',
      name: 'roleInfo',
      message: 'For Engineer, enter GitHub user; for Intern, enter school name',
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid information.";
      }
    },
  ]).then(({memebrRole, roleInfo}) => {reapet (memberRole, roleInfo); })
}

