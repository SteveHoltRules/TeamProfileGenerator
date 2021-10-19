const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

const empRole = require("./src/template.js");

var employeeData = [];

function Profile() {
  this.name;
  this.id;
  this.email;
  this.role;
}

const empName = () => {
  if (!employeeData) {
    employeeData = [];
  }
  //Do I return inquirer, or do I omit the return? The jest-another-RPG omits the return
  inquirer
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
      {
        type: "list",
        name: "role",
        message: "What position does this employee have?",
        choices: ["Engineer", "Manager", "Intern"],
      },
      {
        type: "number",
        name: "id",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
    ])
    .then(({ name, role, id, email }) => {
      if (role === "Manager") {
        inquirer
          .prompt({
            type: "number",
            name: "officeNumb",
            message: "What is the office number of this manager?",
          })
          .then(({ officeNumb }) => {
            this.manager = new Manager(officeNumb, name, id, email);
            employeeData.push(this.manager);
            console.log("Employee Data:", employeeData);
            restart();
          });
      } else if (role === "Engineer") {
        inquirer
          .prompt({
            type: "input",
            name: "github",
            message: "What is the github for this engineer?",
          })
          .then(({ github }) => {
            this.engineer = new Engineer(github, name, id, email);
            employeeData.push(this.engineer);
            console.log("Employee Data:", employeeData);
            restart();
          });
      } else if (role === "Intern") {
        inquirer
          .prompt({
            type: "input",
            name: "school",
            message: "What is the school for this intern?",
          })
          .then(({ school }) => {
            this.intern = new Intern(school, name, id, email);
            employeeData.push(this.intern);
            console.log("Employee Data:", employeeData);
            restart();
          });
      } else {
        this.employee = new Employee(name, id, email);
        employeeData.push(this.employee);
        console.log("Employee Data:", employeeData);
        restart();
      }
    });
};

// Add a new Employee
function restart() {
  inquirer
    .prompt({
      type: "confirm",
      name: "restart",
      message: "Would you like to add a new Employee?",
      default: false,
    })
    .then((newemployee) => {
      if (newemployee.restart) {
        empName();
      } else {
        // console.log(typeof generatePage());
        // generatePage(employeeData);
        console.log("Employee Data: ", empRole(employeeData));
      }
    });
}

//Call the program
empName();