const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(school) {
    super()

    this.school = school;
  }
  getRole() {
    return `Intern`;
  };
  getSchool() {
    return `${this.school}`
  };
}

module.exports = Intern;