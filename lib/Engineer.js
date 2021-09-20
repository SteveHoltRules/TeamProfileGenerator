const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(github) {
    super();
    this.github = github;
  }

  getRole(){
    return `Engineer`;
  }
  getGitHub(){
    return `${this.github}`;
  }
};

module.exports = Engineer;