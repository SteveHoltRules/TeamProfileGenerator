class Intern extends Employee {
  constructor(name, school) {
    super()
    this.name = name;
    this.school = school;
  }
  getRole() {
    return `Intern`;
  };
  getSchool() {
    return `${this.school}`
  };
}