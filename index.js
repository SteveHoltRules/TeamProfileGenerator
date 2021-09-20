const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

var employeeData = {}

function EmployeeData() {
    this.name;
    this.id;
    this.email;
    this.role;
}

const empName = () => {
  if(!employeeData) {
    employeeData = {};
  }
  return inquirer 
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee name?",
        validate: (employeeName) => {
          if (!employeeName) {
            console.log("Please enter the employee name");
            return false;
          } else {
            return true;
          }
        },
      },
  ])
  .then((empName) => {
    console.log("this is the employee name");
    console.log(empName);
    return empName;
  });
};

const role = (name) => {

}