const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(officeNumber) {
    super();
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOffice() {
    return `${this.officeNumber}`;
  }
}

module.exports = Manager;

