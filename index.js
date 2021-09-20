const inquirer = require('inquirer');

var employeeData = {}

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
  })
}