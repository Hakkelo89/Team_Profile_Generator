const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ officeNumber, ...rest }) {
    super(rest);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Manager;
