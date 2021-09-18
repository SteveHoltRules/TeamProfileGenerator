class Manager extends Employee {
  constructor(name, officeNumber) {
    super();
    this.name = name;
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
