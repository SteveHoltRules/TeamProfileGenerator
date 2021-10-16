const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

var employeeData = [];

function Profile() {
    this.name;
    this.id;
    this.email;
    this.role;
}

const empName = () => {
  if(!employeeData) {
    employeeData = {};
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
        choices: ["Employee", "Engineer", "Manager", "Intern"]
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
      }
  ])
  .then(({ name, role, id, email}) => {
    this.employee = new Employee(name, id, email);

    if(role === "Manager") {
      inquirer
        .prompt({
          type: "number",
          name: "officeNumb",
          message: "What is the office number of this manager?",
        })
        .then(({ officeNumb }) => {
          this.manager = new Manager(officeNumb);
          employeeData.push(this.employee);
        })
    } else if (role ==="Engineer") {
      inquirer
        .prompt({
          type: "input",
          name: "github",
          message: "What is the github for this engineer?",
        })
        .then(({ github }) => {
          this.engineer = new Engineer(github);
          employeeData.push(this.employee);
        })
    } else if (role === "Intern") {
            inquirer
        .prompt({
          type: "input",
          name: "school",
          message: "What is the school for this intern?",
        })
        .then(({ school }) => {
          this.intern = new Intern(school);

          employeeData.push(this.employee);

        })
    } else {
      employeeData.push(this.employee);
    }

  })
};


//To add a new employee prompt
 inquirer.prompt({});

empName();