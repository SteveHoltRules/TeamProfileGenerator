const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(github, name, id, email) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return `Engineer`;
  }
  getGitHub() {
    return `${this.github}`; 
  }
};

module.exports = Engineer;