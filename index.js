const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template.js');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// const teamMembers = [];
// const idArray = [];

const questions = [
  {
    type: "input",
    name: "employeeName",
    message: "Enter the Employee's name (Required):",
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
    message: "Enter the Employee's ID (Required):",
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
    message: "Enter the Employee's e-mail (Required):",
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
]; 


