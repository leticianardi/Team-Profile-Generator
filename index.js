const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const renderHTML = require("./src/pageHTML.js");

const teamMembers = [];
// const idArray = [];

const questions = [
  {
    type: "input",
    name: "employeeName",
    message: "What is the employee's name?",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    }
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the employee's id?",
    validate: answer => {
      const pass = answer.match(
        /^[1-9]\d*$/
      );
      if (pass) {
        return true;
      }
      return "Please enter a valid id.";
    }
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the employee's e-mail?",
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
    type: "confirm",
    name: "addMoreMembers",
    message: "Would you like to add more team members?",
  },
];


//function to add team members if they're engineer or intern
function addMember() {
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "My team is complete"
      ],
    },
    {
      type: "input",
      name: "roleInfo",
      message: "For Engineer, enter GitHub username; for Intern, enter school's name",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    }
  ])
    .then(({ role, roleInfo }) => { repeat(role, roleInfo); })
}

function repeat(role, roleInfo) {
  inquirer.prompt(questions)

    .then(({ employeeName, employeeId, employeeEmail, addMoreMembers }) => {
      let member;
      if (role === 'Engineer') {
        member = new Engineer(employeeName, employeeId, employeeEmail, roleInfo)
      } else if (role === 'Intern') {
        member = new Intern(employeeName, employeeId, employeeEmail, roleInfo)
      }

      // push the answers to a new array
      teamMembers.push(member);
      if (addMoreMembers) {
        addMember();
      } else {
        // generate HTML file by calling generateHTML and passing the array
        fs.writeFile("./dist/team.html", renderHTML(teamMembers), (err) => {
          // display error or success
          if (err) { console.log('There was an error', err) }
          console.log("Successful."); //success
        });
      }
    })
}

// start app
function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "employeeName",
      message: "What is the manager's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is the manager's id?",
      validate: answer => {
        const pass = answer.match(
          /^[1-9]\d*$/
        );
        if (pass) {
          return true;
        }
        return "Please enter a valid id.";
      }
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "What is the manager's e-mail?",
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
      name: "roleInfo",
      message: "What is the team manager's office number?",
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
  ])
    .then(({ employeeName, employeeId, employeeEmail, roleInfo }) => {
      let member = new Manager(employeeName, employeeId, employeeEmail, roleInfo)
      teamMembers.push(member)

      addMember()
    })
}

// run the app
init();
