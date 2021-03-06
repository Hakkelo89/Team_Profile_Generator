const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ github, ...rest }) {
    super(rest);
    this.github = github;
    this.role = "Engineer";
  }

  getGitHub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Engineer;
