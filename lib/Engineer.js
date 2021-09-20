const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, github) {
    super();
    this.name = name;
    this.github = github;
  }

  getRole(){
    return `Engineer`;
  };
  getGitHub(){
    return `${this.github}`;
  }
}

module.exports = Engineer;