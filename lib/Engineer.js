const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    //should this be a setter? set github {this.github = github}
    this.github = github;
  }

  getRole() {
    return `Engineer`;
  }
  //Why doesn't this work?!
  getGitHub() {
    return this.github;
  }
};

module.exports = Engineer;