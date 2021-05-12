const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Intern;
